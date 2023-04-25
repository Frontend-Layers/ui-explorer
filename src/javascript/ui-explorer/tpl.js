function tpl(str, labels) {
  let res = str;

  for (const [key, value] of Object.entries(labels)) {
    res = res.replaceAll(key, value);
  }

  return res;
}

export default tpl;
