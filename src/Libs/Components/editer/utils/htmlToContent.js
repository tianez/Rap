// let {
//     DraftPasteProcessor,
//     processHTML
// } = Draft
// let {
//     processHTML
// } = DraftPasteProcessor
let {
    processHTML
} = require('draft-js/lib/DraftPasteProcessor')

let htmlToContent = function(html) {
    return processHTML(html);
}
module.exports = htmlToContent
