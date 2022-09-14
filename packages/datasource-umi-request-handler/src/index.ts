import { RuntimeOptionsConfig } from '@alilc/lowcode-datasource-types';

import request from 'umi-request';
import { RequestOptionsInit } from 'umi-request/types';

// config 留着扩展
export function createUmiRequestHandler(config?: Record<string, unknown>) {
  // eslint-disable-next-line space-before-function-paren
  return async function (options: RuntimeOptionsConfig) {
    const requestConfig: RequestOptionsInit = {
      ...options,
      data: options.params,
      // @ts-ignore
      headers: options.headers,
      parseResponse: false,
      ...config,
    };
    const response: Response = await request(options.uri, requestConfig);
    const data = await response.clone().json();
    const headers: any = {};
    response.headers.forEach((value, key) => {
      headers[key] = value;
    });
    const rebuildResponse = {
      data,
      headers,
      config: requestConfig,
      status: response.status,
      statusText: response.statusText,
    };
    return rebuildResponse;
  };
}
