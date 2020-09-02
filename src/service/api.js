import request from 'umi-request';

export async function getArticleNum(params) {
    return request('/api/lc/SELECTNUMS', {
      method: 'GET',
      data: params,
    });
  }