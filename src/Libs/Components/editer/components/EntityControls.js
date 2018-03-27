'use strict'

let {
    EditorState,
    RichUtils,
    Entity,
} = Draft;

let StyleButton = require('./StyleButton')

let Language = require('../config/Language')
let local = 'zh_CN'
let locals = Language[local]

class EntityControls extends React.Component {
    constructor(props) {
        super(props)
        this.ENTITY_CONTROLS = [{
            label: 'Link',
            icon: 'fa-link',
            action: this._addLink.bind(this)
        }, {
            label: 'unLink',
            icon: 'fa-unLink',
            action: this._removeLink.bind(this)
        }]
    }
    _addLink( /* e */ ) {
        const {
            editorState
        } = this.props;
        const selection = editorState.getSelection();
        if (selection.isCollapsed()) {
            return;
        }
        const href = 'http://www.baidu.com'
        const entityKey = Entity.create('link', 'MUTABLE', {
            href
        });
        this.props.onChange(RichUtils.toggleLink(editorState, selection, entityKey));
    }
    _removeLink( /* e */ ) {
        const {
            editorState
        } = this.props;
        const selection = editorState.getSelection();
        if (selection.isCollapsed()) {
            return;
        }
        this.props.onChange(RichUtils.toggleLink(editorState, selection, null));
    }
    render() {
        let {
            entityControls
        } = this.props;
        var currentStyle = this.props.editorState.getCurrentInlineStyle();
        return (
            React.createElement('div', {
                    className: 'RichEditor-controls'
                },
                this.ENTITY_CONTROLS.map(type =>
                    React.createElement(StyleButton, {
                        key: type.label,
                        active: currentStyle.has(type.style),
                        label: locals[type.label] || type.label,
                        icon: type.icon,
                        onToggle: type.action
                    })
                )
            )
        )
    }
}
module.exports = EntityControls
