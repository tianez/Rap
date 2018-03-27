'use strict'

let {
    Entity
} = Draft

const Media = (props) => {
    const entity = Entity.get(props.block.getEntityAt(0));
    const {
        src
    } = entity.getData();
    const type = entity.getType();
    let media;
    if (type === 'audio') {
        media = React.createElement(Audio, {
            src: src
        })
    } else if (type === 'image') {
        media = React.createElement(Image, {
            src: src
        })
    } else if (type === 'video') {
        media = React.createElement(Video, {
            src: src
        })
    }
    return media;
};

//image
const Image = (props) => {
    return (
        React.createElement('img', {
            src: props.src,
            style: {
                width: '200px'
            }
        })
    )
}

//mp3
const Audio = (props) => {
    return (
        React.createElement('audio', {
            src: props.src,
            style: {
                width: '200px'
            },
            controls: 'controls'
        })
    )
}

//mp4
const Video = (props) => {
    return (
        React.createElement('video', {
            src: props.src,
            style: {
                width: '200px'
            },
            controls: 'controls'
        })
    )
};
module.exports = Media
