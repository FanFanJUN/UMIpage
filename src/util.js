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

/*
 * @description 数据字典
 * @author LC@1981824361
 * @date 2019-06-07
 * @export
 * @param {*} key 码值
 * @param {*} dicName 翻译的数据字典码类型
 * @param {*} optionsData 数据 字典
 * @returns
*/
export const getDicNameByKey = (key, dicName, optionsData) => {
  if (!key) {
    return;
  }
  if (optionsData[dicName] && optionsData[dicName] instanceof Array) {
    const isKeyArr = key.indexOf(',') !== -1;
    if (isKeyArr) {
      let codeName = '';
      const keyArr = key.split(',');
      keyArr.forEach((code) => {
        const regItem = optionsData[dicName].filter((item) => {
          return item.dictionaryNo === code;
        });

        if (regItem.length > 0) {
          codeName += `${regItem[0].dictionaryNm || ''},`;
        }
      });
      codeName = codeName.substring(0, codeName.length - 1);
      return codeName;
    } else {
      const realationArr = optionsData[dicName].filter(item => item.dictionaryNo === key);
      if (realationArr.length > 0) {
        return realationArr[0].dictionaryNm || '';
      }
    }
  } else {
    return '';
  }
};