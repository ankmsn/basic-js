const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = "";
  let accNum = 1;
  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      accNum += 1;
    } else {
      newStr += accNum.toString() + str[i];
      accNum = 1;
    }
  }
  return newStr.replaceAll(1, "");
}

module.exports = {
  encodeLine,
};
