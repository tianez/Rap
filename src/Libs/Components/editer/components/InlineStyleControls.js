'use strict'
let {
    RichUtils
} = Draft;
let StyleButton = require('./StyleButton')

let Language = require('../config/Language')
let local = 'zh_CN'
let locals = Language[local]

let INLINE_STYLES = [{
    label: 'Bold',
    icon: 'fa-bold',
    style: 'BOLD'
}, {
    label: 'Italic',
    icon: 'fa-italic',
    style: 'ITALIC'
}, {
    label: 'Underline',
    icon: 'fa-underline',
    style: 'UNDERLINE'
}, {
    label: 'Monospace',
    style: 'CODE'
}, {
    label: 'Strikethrough',
    style: 'STRIKETHROUGH'
}]

class InlineStyleControls extends React.Component {
    constructor() {
        super()
    }
    onToggle(inlineStyle) {
        this.props.onToggle(
            RichUtils.toggleInlineStyle(
                this.props.editorState,
                inlineStyle
            )
        )
    }
    render() {
        let inlineStyles = this.props.inlineStyles || INLINE_STYLES
        let currentStyle = this.props.editorState.getCurrentInlineStyle();
        return (
            React.createElement('div', {
                    className: 'RichEditor-controls'
                },
                inlineStyles.map(type =>
                    React.createElement(StyleButton, {
                        key: type.label,
                        active: currentStyle.has(type.style),
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
module.exports = InlineStyleControls
