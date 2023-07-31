/**
 * arrayClone
 *
 * @template T
 * @param {T[]} arr
 */
export const arrayClone = <T>(arr: T[]): T[] => {
  let result : any = new Array();
  for (let i=0; i<arr.length; i++){
  result.push(arr[i]);
}
  return result;
};
