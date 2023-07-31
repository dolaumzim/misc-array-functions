import { Ientrydata, PageItems } from '../types/Ientrydata';

/**
 * extractItemsPaginateArray
 * @description
 * Extracts the items from the pages array
 * and returns an array of PageItems
 *
 * @param {Ientrydata} data
 * @return {*}  {PageItems[]}
 */
export const extractItemsPaginateArray = (data: Ientrydata): PageItems[] => {
  let result: any = new Array();
  for (let page of data.pages) {
    result.push(...page.items);
  }
  return result;
};
