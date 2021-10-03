import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' }) {
  let result = '';
  let res = str;

  for (let j = 0; j < additionRepeatTimes; j++){
    if (j === additionRepeatTimes - 1) {
      res += addition
    } else {
      res += addition + additionSeparator;
    }
  }

  for (let i = 0; i < repeatTimes; i++) {
    if (i === repeatTimes - 1) {
      result += res
    } else {
      result += res + separator;
    }
  }

  return result;
}