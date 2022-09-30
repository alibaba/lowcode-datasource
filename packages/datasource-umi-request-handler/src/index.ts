import { RuntimeOptionsConfig } from '@alilc/lowcode-datasource-types';

import request from 'umi-request';
import { RequestOptionsInit, RequestResponse } from 'umi-request/types';

// config 留着扩展
export function createUmiRequestHandler(config?: Record<string, unknown>) {
  // eslint-disable-next-line space-before-function-paren
  return async function (options: RuntimeOptionsConfig) {
    const requestOptions: RequestOptionsInit = {
      ...options,
      // 请求方法
      method: options.method,
      // 请求参数
      data: options.params,
      // 请求头信息
      headers: options.headers as HeadersInit,
      // 在 requestHandlersMap 控制请求方式对应的发送请求的行为实例设计器时，可丰富扩展传入请求实例的参数
      ...config,
      // 'getResponse': 是否获取源 Response， 返回结果将包含一层： { data, response }
      // 参考：https://github.com/umijs/umi-request/blob/master/README_zh-CN.md
      // 为了尽可能多得给源数据，提供更多灵活自定义的可能
      getResponse: true,
    };
    const response: RequestResponse = await request(options.uri, requestOptions);
    // 参考 axios 将 options 等请求信息返回，方便使用者根据 options 做一些逻辑处理
    // https://github.com/axios/axios#response-schema
    return { ...response, options };
  };
}
