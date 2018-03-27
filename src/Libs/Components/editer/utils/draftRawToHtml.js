let processInlineStylesAndEntities = require('./processInlineStylesAndEntities')

let blockTagMap = {
    'header-one': ['<h1>', '</h1>\n'],
    'header-two': ['<h2>', '</h2>\n'],
    'header-three': ['<h3>', '</h3>\n'],
    'header-four': ['<h4>', '</h4>\n'],
    'header-five': ['<h5>', '</h5>\n'],
    'header-six': ['<h6>', '</h6>\n'],
    'unstyled': ['<p>', '</p>\n'],
    'code-block': ['<pre><code>', '</code></pre>\n'],
    'blockquote': ['<blockquote>', '</blockquote>\n'],
    'ordered-list-item': ['<li>', '</li>\n'],
    'unordered-list-item': ['<li>', '</li>\n'],
    'atomic': ['<p>', '</p>\n'],
    'default': ['<p>', '</p>\n']
};

let inlineTagMap = {
    'BOLD': ['<strong>', '</strong>'],
    'ITALIC': ['<em>', '</em>'],
    'UNDERLINE': ['<u>', '</u>'],
    'CODE': ['<code>', '</code>'],
    'STRIKETHROUGH': ['<del>', '</del>'],
    'default': ['<span>', '</span>'],
    'orange': ['<font color="orange" >', '</font>']
};

let entityTagMap = {
    'link': ['<a href="<%= href %>">', '</a>'],
    'image': ['<img src="<%= src %>"', '/>'],
    'video': ['<video src="<%= src %>" controls', '/>'],
    'audio': ['<audio src="<%= src %>" controls ', '/>'],
};

let nestedTagMap = {
    'ordered-list-item': ['<ol>', '</ol>'],
    'unordered-list-item': ['<ul>', '</ul>']
};

let inlineStyleRanges = {

}

let draftRawToHtml = function(raw) {
    let html = '';
    let nestLevel = [];
    let lastIndex = raw.blocks.length - 1;

    raw.blocks.forEach(function(block, index) {
        // close tag if not consecutive same nested
        if (nestLevel.length > 0 && nestLevel[0] !== block.type) {
            let type = nestLevel.shift();
            html += nestedTagMap[type][1] + '\n';
        }

        // open tag if nested
        if (nestedTagMap[block.type] && nestLevel[0] !== block.type) {
            html += nestedTagMap[block.type][0] + '\n';
            nestLevel.unshift(block.type);
        }

        let blockTag = blockTagMap[block.type];
        html += blockTag ?
            blockTag[0] +
            processInlineStylesAndEntities(inlineTagMap, entityTagMap, raw.entityMap, block) +
            blockTag[1] :
            blockTagMap['default'][0] +
            processInlineStylesAndEntities(inlineTagMap, block) +
            blockTagMap['default'][1];

        // close any unclosed blocks if we've processed all the blocks
        if (index === lastIndex && nestLevel.length > 0) {
            while (nestLevel.length > 0) {
                html += nestedTagMap[nestLevel.shift()][1];
            }
        }

    });
    return html;
}

module.exports = draftRawToHtml
