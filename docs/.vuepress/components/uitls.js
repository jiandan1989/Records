const firstUpperCase = function (str) {
  return str.replace(/^\S/, function (s) {
    return s.toUpperCase();
  });
}

export default firstUpperCase;
