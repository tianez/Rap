'use strict'
let {
    RichUtils
} = Draft;

let StyleButton = require('./StyleButton')

let Language = require('../config/Language')
let local = 'zh_CN'
let locals = Language[local]

let BLOCK_TYPES = [{
    label: 'P',
    style: 'unstyled'
}, {
    label: 'H1',
    style: 'header-one'
}, {
    label: 'H2',
    style: 'header-two'
}, {
    label: 'H3',
    style: 'header-three'
}, {
    label: 'H4',
    style: 'header-four'
}, {
    label: 'H5',
    style: 'header-five'
}, {
    label: 'H6',
    style: 'header-six'
}, {
    label: 'Blockquote',
    icon: 'fa-quote-left',
    style: 'blockquote'
}, {
    label: 'UL',
    icon: 'fa-list-ul',
    style: 'unordered-list-item'
}, {
    label: 'OL',
    icon: 'fa-list-ol',
    style: 'ordered-list-item'
}, {
    label: 'CodeBlock',
    icon: 'fa-code',
    style: 'code-block'
}];


class BlockStyleControls extends React.Component {
    constructor() {
        super()
    }
    onToggle(blockType) {
        this.props.onToggle(
            RichUtils.toggleBlockType(
                this.props.editorState,
                blockType
            )
        );
    }
    render() {
      let blockTypes = this.props.blockTypes || BLOCK_TYPES
      let editorState = this.props.editorState
      const selection = editorState.getSelection();
      const blockType = editorState
          .getCurrentContent()
          .getBlockForKey(selection.getStartKey())
          .getType();
      return (
          React.createElement('div', {
                  className: 'RichEditor-controls'
              },
              blockTypes.map(type =>
                  React.createElement(StyleButton, {
                      key: type.label,
                      active: type.style === blockType,
                      label: locals[type.label] || type.label,
                      icon: type.icon,
                      onToggle: this.onToggle.bind(this),
                      style: type.style
                  })
              )
          )
      )
    }
}
module.exports = BlockStyleControls
