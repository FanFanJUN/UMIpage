import request from 'umi-request';

/**
 * @description 数据字典
 * @author LC@1981824361
 * @date 2019-06-01
 * @export
 * @param {*} dicCategoryNos
 * @returns
 */
export function getDicOptions(dicCategoryNos) {
    if (!dicCategoryNos.length) {
      return;
    }
    const params = { projectIds: dicCategoryNos };
    return request('/api/lc/CACHEDIC', {
      method: 'POST',
      data: params,
    }).then((response) => {
      // if (!isRespSucc(response)) {
      //   // eslint-disable-next-line no-throw-literal
      //   throw '数据字典获取异常';
      // }
      const options = response.retCacheList;
      const obj = {};
      for (let i = 0; i < dicCategoryNos.length; i++) {
        for (let j = 0; j < options.length; j++) {
          if (options[j].dictionaryCategoryNo === dicCategoryNos[i].dictionaryCategoryNo) {
            if (dicCategoryNos[i].NotInArr) {
              obj[options[j].dictionaryCategoryNo] = options[j].dictionaryCategoryNo.filter((itemTmp) => {
                return dicCategoryNos[i].NotInArr.every(
                  item => item.dictionaryNo !== itemTmp.dictionaryNo
                );
              });
            } else {
              obj[options[j].dictionaryCategoryNo] = options[j].dictionaries;
            }
            if (dicCategoryNos[i].ChooseFlag) {
              obj[options[j].dictionaryCategoryNo].unshift({
                dictionaryCategoryNm: '请选择',
                dictionaryCategoryNo: '请选择',
                dictionaryNm: '--请选择--',
                dictionaryNo: '',
              });
            }
          }
        }
      }
      return obj;
    });
  }