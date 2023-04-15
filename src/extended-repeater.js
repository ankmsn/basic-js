const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
// function repeater(str, options) {
//   let addition;

//   if (options.addition instanceof Map) {
//     addition = "[object Map]";
//   } else if (options.addition instanceof Set) {
//     addition = "[object Set]";
//   } else if (
//     Array.isArray(options.addition) ||
//     options.addition === null ||
//     options.addition === false
//   ) {
//     addition = JSON.stringify(options.addition).replace(/[`"`\[\]]/gi, "");
//   } else if (typeof options.addition === "object") {
//     addition = "[object Object]";
//   } else if (!options.addition) {
//     addition = "";
//   } else {
//     addition = options.addition;
//   }

//   let separator = options.separator || "+";
//   let additionSeparator = options.additionSeparator || "|";

//   addition += additionSeparator;
//   addition += addition.repeat(options.additionRepeatTimes - 1);

//   if (additionSeparator !== "") {
//     addition = addition.slice(0, -additionSeparator.length);
//   }

//   str += addition;
//   str += separator;
//   str += str.repeat(options.repeatTimes - 1);
//   str = str.slice(0, -separator.length);
//   return str;
// }

function repeater(str, options) {
  str = String(str);

  let addition;
  options.addition
    ? (addition = String(options.addition))
    : options.addition === false
    ? (addition = "false")
    : options.addition === null
    ? (addition = "null")
    : (addition = "");

  let separator;
  options.separator
    ? (separator = String(options.separator))
    : (separator = "+");

  let additionSeparator;
  options.additionSeparator
    ? (additionSeparator = String(options.additionSeparator))
    : (additionSeparator = "|");

  addition += additionSeparator;
  addition += addition.repeat(options.additionRepeatTimes - 1);

  if (additionSeparator !== "") {
    addition = addition.slice(0, -additionSeparator.length);
  }

  str += addition;
  str += separator;
  str += str.repeat(options.repeatTimes - 1);
  str = str.slice(0, -separator.length);
  return str;
}

module.exports = {
  repeater,
};
