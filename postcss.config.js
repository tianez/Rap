
const pxtorem = require('postcss-pxtorem');
module.exports = {
    plugins: [
        require('autoprefixer'),
        pxtorem({
            rootValue: 100,
            propList: [
                'right',
                'top',
                'left',
                'bottom',
                'padding',
                'padding-left',
                'padding-right',
                'padding-top',
                'padding-bottom',
                'margin',
                'margin-left',
                'margin-right',
                'margin-top',
                'margin-bottom',
                'font',
                'font-size',
                'background',
                'background-size',
                'line-height',
                'height',
                'min-height',
                'max-height',
                'width',
                'min-width',
                'max-width',
                'letter-spacing',
                'border-radius'
            ]
        })
    ]
}