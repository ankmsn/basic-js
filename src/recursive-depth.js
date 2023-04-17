const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let acc = 1;
    arr.forEach((element) => {
      if (!Array.isArray(element)) {
        element = element;
      } else {
        const depth = this.calculateDepth(element) + 1;
        if (depth > acc) {
          acc = depth;
        }
      }
    });
    return acc;
  }
}

module.exports = {
  DepthCalculator,
};
