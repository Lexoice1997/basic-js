import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(arr) {
  let cats = 0;
  arr.forEach(item => {
    item.forEach(res => {
      if (res === '^^') {
        cats++;
      }
    })
  })

  return cats;
}

countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ])

