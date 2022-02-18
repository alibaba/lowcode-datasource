import { InterpretDataSource } from '@alilc/lowcode-types';

// 这里仅仅是数据源部分的 schema:
// @see: https://yuque.antfin-inc.com/mo/spec/spec-low-code-building-schema#XMeF5
export const DATA_SOURCE_SCHEMA: InterpretDataSource = {
  list: [
    {
      id: 'user',
      isInit: true,
      type: 'fetch',
      isSync: true,
      options: {
        uri: 'https://mocks.alibaba-inc.com/user.json',
      },
    },
    {
      id: 'orders',
      isInit: true,
      type: 'fetch',
      isSync: true,
      options: {
        uri: 'https://mocks.alibaba-inc.com/orders.json',
        params: {
          type: 'JSExpression',
          value: '{ userId: this.state.user.id }',
        },
      },
    },
    {
      id: 'orderList',
      isInit: true,
      type: 'fetch',
      isSync: true,
      options: {
        uri: 'https://mocks.alibaba-inc.com/orders.json',
        params: {
          keyword: {
            type: 'JSExpression',
            value: 'this.state.user.id',
          }
        },
      },
    },
  ],
};
