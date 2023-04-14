const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  let str = "";
  for (i = 0; i < domains.length; i++) {
    let domElement = domains[i].split(".");
    for (j = domElement.length - 1; j >= 0; j--) {
      str += `.${domElement[j]}`;
      if (str in obj) {
        obj[str] += 1;
      } else {
        obj[str] = 1;
      }
    }
    str = "";
  }
  return obj;
}

module.exports = {
  getDNSStats,
};
