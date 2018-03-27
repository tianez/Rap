'use strict'

const debounce = require('lodash/debounce')
const {
    Editor,
    EditorState,
    Modifier,
    RichUtils,
    DefaultDraftBlockRenderMap,
    convertToRaw,
    CompositeDecorator,
    ContentState,
    Entity,
    AtomicBlockUtils,
    DraftPasteProcessor,
    getDefaultKeyBinding,
    KeyBindingUtil
} = Draft

const {
    hasCommandModifier
} = KeyBindingUtil

const htmlToContent = require('./utils/htmlToContent')
const draftRawToHtml = require('./utils/draftRawToHtml')
const findEntities = require('./utils/findEntities')

const EntityControls = require('./components/EntityControls')
const InlineStyleControls = require('./components/InlineStyleControls')
const BlockStyleControls = require('./components/BlockStyleControls')
const ColorStyleControls = require('./components/ColorStyleControls')
const Link = require('./components/Link')
const Media = require('./components/Media')

const ajaxUpload = require('../utils/AjaxUpload')
const {
    getUpToken,
    getHash
} = require('../utils/Qiniu')

const upload = require('./utils/upload')

const FormGroup = require('../forms/FormGroup')

class BasicHtmlEditor extends React.Component {
    constructor(props) {
        super(props);
        let {
            name,
            value
        } = props;
        let delay = props.delay ? props.delay : 500

        const decorator = new CompositeDecorator([{
            strategy: findLinkEntities,
            component: Link
        }]);
        this.state = {
            editorState: value ?
                EditorState.createWithContent(
                    ContentState.createFromBlockArray(htmlToContent(value)),
                    decorator
                ) : EditorState.createEmpty(decorator)
        };
        this.focus = () => this.refs.editor.focus()
        this.onChange = (editorState) => {
            let previousContent = this.state.editorState.getCurrentContent();
            this.setState({
                editorState: editorState
            });
            if (previousContent !== editorState.getCurrentContent()) {
                this.emitHTML(editorState);
            }
        };
        this.emitHTML = debounce(emitHTML, delay);

        function emitHTML(editorState) {
            let raw = convertToRaw(editorState.getCurrentContent());
            let html = draftRawToHtml(raw);
            this.props.onChange(name,html);
        }
    }
    _handleKeyCommand(command) {
        const {
            editorState
        } = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }

    myKeyBindingFn(e) {
        // console.log(e.keyCode);
        if (e.keyCode === 83 && hasCommandModifier(e)) {
            return 'myeditor-save';
        }
        return getDefaultKeyBinding(e);
    }

    _handleReturn(e) {
        if (e.metaKey === true) {
            return this._addLineBreak();
        } else {
            return false;
        }
    }
    _addLineBreak( /* e */) {
        let newContent, newEditorState;
        const {
            editorState
        } = this.state;
        const content = editorState.getCurrentContent();
        const selection = editorState.getSelection();
        const block = content.getBlockForKey(selection.getStartKey());
        console.log(content.toJS(), selection.toJS(), block.toJS());
        if (block.type === 'code-block') {
            newContent = Modifier.insertText(content, selection, '\n');
            newEditorState = EditorState.push(editorState, newContent, 'add-new-line');
            this.onChange(newEditorState);
            return true;
        } else {
            return false;
        }
    }

    _onDrop(e) {
        e.preventDefault()
        let files = e.dataTransfer.files
        console.log(e.dataTransfer.files)
        let {
            editorState
        } = this.state;
        this._dropHandler2(files)
    }
    _onload(res, type) {
        let {
            editorState
        } = this.state;
        console.log(res);
        const entityKey = Entity.create(type, 'IMMUTABLE', {
            src: 'http://7xj11y.com1.z0.glb.clouddn.com/' + res.name
        })
        this.setState({
            editorState: AtomicBlockUtils.insertAtomicBlock(
                editorState,
                entityKey,
                ' '
            )
        }, () => {
            setTimeout(() => this.focus(), 0);
        })
    }
    _dropHandler2(files) {
        let {
            editorState
        } = this.state;
        let selection = editorState.getSelection();
        for (let i = 0; i < files.length; i++) {
            console.log(files[i]);
            getHash(files[i].path, function (e) {
                console.log(e);
            })
            let type
            if (files[i].type.indexOf("audio") != -1) {
                type = 'audio'
            } else if (files[i].type.indexOf("video") != -1) {
                type = 'video'
            } else if (files[i].type.indexOf("image") != -1) {
                type = 'image'
            } else {
                alert('文件' + files[i].name + '不允许上传。')
            }
            if (type) {
                let urlValue = URL.createObjectURL(files[i])
                let rs = upload({
                    files: files,
                    id: i,
                    type: type,
                    onload: this._onload.bind(this)
                })
            }
        }
    }
    _dropHandler(files) {
        let {
            editorState
        } = this.state;
        let selection = editorState.getSelection();
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.indexOf("audio") != -1) {
                let audio = URL.createObjectURL(files[i])
                upload({
                    files: files,
                    id: i,
                    onload: this._onload.bind(this)
                })
                const entityKey = Entity.create('audio', 'IMMUTABLE', {
                    src: audio
                })
                this.setState({
                    editorState: AtomicBlockUtils.insertAtomicBlock(
                        editorState,
                        entityKey,
                        ' '
                    )
                }, () => {
                    setTimeout(() => this.focus(), 0);
                });
            } else if (files[i].type.indexOf("image") != -1) {
                let urlValue = URL.createObjectURL(files[i])
                let rs = upload({
                    files: files,
                    id: i,
                    type: 'image',
                    onload: this._onload.bind(this)
                })
                console.log(rs);
            } else {
                alert('文件' + files[i].name + '不允许上传。')
            }
        }
    }

    render() {
        const {
            editorState
        } = this.state;

        // If the user changes block type before entering any text, we can
        // either style the placeholder or hide it. Let's just hide it now.
        let className = 'RichEditor-editor';
        var contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                className += ' RichEditor-hidePlaceholder';
            }
        }
        return (
            React.createElement(FormGroup, {
                title: this.props.title
            },
                React.createElement('div', {
                    className: 'RichEditor-root draftjs-bhe',
                },
                    React.createElement(BlockStyleControls, {
                        editorState: editorState,
                        onToggle: this.onChange
                    }),
                    React.createElement(InlineStyleControls, {
                        editorState: editorState,
                        onToggle: this.onChange
                    }),
                    React.createElement(EntityControls, {
                        editorState: editorState,
                        onChange: this.onChange
                    }),
                    React.createElement(ColorStyleControls, {
                        editorState: editorState,
                        onToggle: this.onChange
                    }),
                    React.createElement('div', {
                        className: className,
                        onDrop: this._onDrop.bind(this)
                    },
                        React.createElement(Editor, {
                            blockStyleFn: getBlockStyle,
                            blockRendererFn: mediaBlockRenderer,
                            customStyleMap: styleMap,
                            editorState: editorState,
                            handleKeyCommand: this._handleKeyCommand.bind(this),
                            handleReturn: this._handleReturn.bind(this),
                            keyBindingFn: this.myKeyBindingFn.bind(this),
                            onChange: this.onChange,
                            placeholder: 'Tell a story...',
                            ref: 'editor',
                            spellCheck: true
                        })
                    )
                )
            )
        )
    }
}

// Custom overrides for "code" style.
const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2
    },
    red: {
        color: 'rgba(255, 0, 0, 1.0)',
    },
    orange: {
        color: 'rgba(255, 127, 0, 1.0)',
    },
    yellow: {
        color: 'rgba(180, 180, 0, 1.0)',
    },
    green: {
        color: 'rgba(0, 180, 0, 1.0)',
    },
    blue: {
        color: 'rgba(0, 0, 255, 1.0)',
    },
    indigo: {
        color: 'rgba(75, 0, 130, 1.0)',
    },
    violet: {
        color: 'rgba(127, 0, 255, 1.0)',
    },
}

function getBlockStyle(block) {
    switch (block.getType()) {
        case 'blockquote':
            return 'RichEditor-blockquote';
        default:
            return null;
    }
}

function mediaBlockRenderer(block) {
    if (block.getType() === 'atomic') {
        return {
            component: Media,
            editable: false,
        };
    }
    return null;
}

function findLinkEntities(contentBlock, callback) {
    contentBlock.findEntityRanges(
        (character) => {
            const entityKey = character.getEntity();
            return (
                entityKey !== null &&
                Entity.get(entityKey).getType() === 'link'
            );
        },
        callback
    )
}

module.exports = BasicHtmlEditor
