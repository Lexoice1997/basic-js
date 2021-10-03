import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  let obj = {};
  let arr = str.split('');
  let result = [];

  arr.forEach(elem => {
    if (String(elem) in obj) {
      obj[String(elem)] += 1;
    } else {
      obj[String(elem)] = 1;
    }
  });

  for (let item in obj) {
    if (obj[String(item)] === 1) {
      result.push(item);
    } else {
      result.push(obj[String(item)]);
      result.push(item);
    }
  }

  return result.join('');
}
