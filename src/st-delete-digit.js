import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let max = [];

  let str = String(n);
  for (let i = 0; i < str.length; i++) {
    let str1 = str.substring(0, i);
    let str2 = str.substring(i + 1, str.length);
    max.push(Number(str1.concat(str2)));
  }
  let sorted = max.sort(function(a, b) {
    return a - b;
  });

  return sorted[sorted.length - 1];
}
