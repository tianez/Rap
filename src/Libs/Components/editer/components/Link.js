'use strict'
let {
    Entity
} = Draft

const Link = (props) => {
    const {
        url
    } = Entity.get(props.entityKey).getData();
    return (
        React.createElement('a', {
            href: url,
            style: {
                color: '#3b5998',
                textDecoration: 'underline'
            }
        }, props.children)
    );
};
module.exports = Link
