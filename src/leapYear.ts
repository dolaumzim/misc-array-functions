/**
 * https://pt.wikipedia.org/wiki/Ano_bissexto
 * @param startYear start year
 * @param endYear end year
 * @returns array of leap years between startYear and endYear
 */
export const leapYear = (startYear: number, endYear: number): number[] => {
  let result = new Array();

  for (let i = startYear; i <= endYear; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      result.push(i);
    }
  }
  return result;
};
