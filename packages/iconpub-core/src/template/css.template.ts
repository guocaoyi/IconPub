/**
 * css template
 * @param {string} param.className
 * @param {string} param.fontName
 * @param {string} param.fontPath
 * @param {string} param.hash hash
 */
export const css = ({ className, fontName, fontPath, hash }: any) => `
@font-face {
    font-family: ${fontName};
    src:
        url("${fontPath}${fontName}.eot?#iefix") format("embedded-opentype"),
        url("${fontPath}${fontName}.ttf?${hash}") format("truetype"),
        url("${fontPath}${fontName}.woff?${hash}") format("woff"),
        url("${fontPath}${fontName}.woff2?${hash}") format("woff2"),
        url("${fontPath}${fontName}.svg?${hash}#${fontName}") format("svg");
    font-style: normal;
    font-weight: 400;
}

.${className} {
    display: inline-block;
    transform: translate(0, 0);
    text-rendering: auto;
    font: normal normal 400 14px/1 ${fontName};
    font-size: inherit;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}

.${className}-lg {
    vertical-align: -15%;
    line-height: 0.75em;
    font-size: 1.33333333em;
}

.${className}-2x {
    font-size: 2em;
}

.${className}-3x {
    font-size: 3em;
}

.${className}-4x {
    font-size: 4em;
}

.${className}-5x {
    font-size: 5em;
}
`
