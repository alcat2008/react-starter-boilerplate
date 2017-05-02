/* eslint-disable no-console */

// import 'whatwg-fetch';

import Qs from 'qs';
import debug from 'debug';
import Config from '../config';

const log = debug('react-starter:utils/fetch');

const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

const process = _promise => {
  return new Promise((resolve, reject) => {
    _promise.then(response => response.text())
      .then(response => {
        log('请求结果: ', response);
        if (response === '') {
          resolve({});
        } else {
          const json = JSON.parse(response);
          resolve(json);
        }
      })
      .catch(error => {
        log('请求异常: ', error);
        reject(error);
      });
  });
};

const rawFetch = (url, param) => {
  /* eslint-disable no-console */
  log('=========> 数据请求 <=========');
  log('请求地址: ', url);
  log('请求参数: ', param);
  return process(fetch(Config.host + url, param));
};

export const PFetch = (url, param = {}) => {
  const headers = { ...HEADERS };
  return rawFetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(param)
  });
};

export const GFetch = (url, param) => {
  const headers = { ...HEADERS };
  return rawFetch(url + (param ? '?' + Qs.stringify(param) : ''), {
    method: 'GET',
    headers,
  });
};

export default {
  PFetch,
  GFetch,
};
