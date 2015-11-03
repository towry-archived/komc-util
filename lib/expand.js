
/**
 * expand.js - expand an array with some value
 */

var _ = require('lodash');

/**
 * @param {array} arr - The original array
 * @param {any} value - The value to fill with
 * @param {number} many - The size to expand to
 * @param {boolean} deep - deep copy?
 * @return {array}
 */
function expand (arr, value, many, deep) {
  if (!_.isArray(arr)) {
    throw new Error("require the 1th argument is an Array");
  }

  for (var i = 0; i < many; i++) {
    arr.push(_.clone(value, deep));
  }

  return arr;
}

module.exports = expand;
