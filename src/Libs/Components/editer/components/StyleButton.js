'use strict'
class StyleButton extends React.Component {
    constructor() {
        super();
    }
    onToggle(e) {
        e.preventDefault()
        this.props.onToggle(this.props.style)
    }
    render() {
        let className = 'RichEditor-styleButton';
        let label = this.props.label
        if (this.props.icon) {
            className += ' fa '
            className += this.props.icon
            label = ''
        }
        let style;
        if (this.props.active) {
            className += ' RichEditor-activeButton'
            if (this.props.colorStyleMap) {
                style = this.props.colorStyleMap[this.props.style]
            }
        }
        return (
            React.createElement('span', {
                className: className,
                title: this.props.label,
                style: style,
                onMouseDown: this.onToggle.bind(this)
            }, label)
        );
    }
}

module.exports = StyleButton
