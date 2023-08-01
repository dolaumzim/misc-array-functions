interface MostFrequentType {
  value: string | number;
  occurrences: number;
}

/**
 * findFirstMostFrequent
 * @example findFirstMostFrequent([3, 'a', 3, 'a', 'a', 2, 'a', 3, 'a', 2, 4, 9, 3]);
 * // returns { value: 'a', occurrences: 5 }
 *
 * @param {(Array<string | number>)} inputArray
 * @return {MostFrequentType}  {({ value: string | number; occurrences: number })}
 */

export const findFirstMostFrequent = (
  inputArray: Array<string | number>,
): MostFrequentType => {
  const auxCount = {};

  for (const num of inputArray) {
    auxCount[num] = auxCount[num] ? auxCount[num] + 1 : 1;
  }

  let maxOccur: number = Object.values(auxCount).reduce((a, b) =>
    a > b ? a : b,
  ) as number;
  let maxValue: string | number = Object.keys(auxCount).find(
    key => auxCount[key] === maxOccur,
  );

  if (parseInt(maxValue)) {
    return { value: parseInt(maxValue), occurrences: maxOccur };
  } else return { value: maxValue, occurrences: maxOccur };
};
