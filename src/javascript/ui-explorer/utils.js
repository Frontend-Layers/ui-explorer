/**
 * Get content from Body tag
 *
 * @param {*} html
 * @returns
 */
function getBodyContent(html) {
  const regBodyPattern = /^[\s\S]*<body[^\>]*>([\s\S]*)<\/body>[\s\S]*$/im;
  const res = regBodyPattern.exec(html);

  return res[1];
}

/**
 * Decode HTML to String
 *
 * @param {*} html
 */
function decodeRollupUrl(html, type) {
  const res = html.replace(`data:text/${type};base64,`, '');
  return atob(res);
}

/**
 * Get Random Color
 */
function getColor() {
  // const randomColor = Math.floor(Math.random()*16777215).toString(16);
  // const randomColor = Math.floor(Math.random() * (high - low + 1)) + low;

  const r = Math.floor(Math.random() * (255 + 1));
  const g = Math.floor(Math.random() * (255 + 1));
  const b = Math.floor(Math.random() * (255 + 1));

  const hr = r.toString(16).padStart(2, '0');
  const hg = g.toString(16).padStart(2, '0');
  const hb = b.toString(16).padStart(2, '0');

  return '#' + hr + hg + hb;
}

export { getBodyContent, decodeRollupUrl, getColor };
