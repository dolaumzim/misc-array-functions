//import { join } from 'path';

/**
 * nameArrayToString
 * @description
 * Accepts an array of names and returns a
 * string of names separated by commas and an ampersand
 *
 * @example nameArrayToString(['Bart']);
 * // returns 'Bart'
 * @example nameArrayToString(['Bart', 'Lisa']);
 * // returns 'Bart & Lisa'
 * @example nameArrayToString(['Bart', 'Lisa', 'Maggie']);
 * // returns 'Bart, Lisa & Maggie'
 * @param {string[]} nameArray
 * @return {string}
 */
export const nameArrayToString = (nameArray: string[]) => {
  let result: string = '';

  result = nameArray.join(', ');
  if (nameArray.length === 1) {
    return result;
  }
  result =
    result.slice(0, result.lastIndexOf(',')) +
    ' &' +
    result.slice(result.lastIndexOf(',') + 1);
  return result;
};
