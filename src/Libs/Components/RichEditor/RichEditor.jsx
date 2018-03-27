import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import './RichEditor.less';
import style from './RichEditor.scss';

class RichEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
    }
    handleChange = (editorState) => {
        this.setState({ editorState });
    }
    handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.handleChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }
    _onBoldClick() {
        this.handleChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }
    render() {
        return (
            <div className={style.RichEditor}>
                <button onClick={this._onBoldClick.bind(this)}>Bold</button>
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.handleChange}
                    handleKeyCommand={this.handleKeyCommand}
                    placeholder='Tell a story...'
                />
            </div>
        );
    }
}

export default RichEditor;