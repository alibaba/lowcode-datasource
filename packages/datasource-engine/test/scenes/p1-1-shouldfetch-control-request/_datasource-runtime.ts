import { RuntimeDataSource } from '@alilc/lowcode-types';

// 这里仅仅是数据源部分的:
// @see: https://yuque.antfin-inc.com/mo/spec/spec-low-code-building-schema#XMeF5
export const dataSource: RuntimeDataSource = {
  list: [
    {
      id: 'user',
      isInit: true,
      type: 'fetch',
      isSync: true,
      options: () => ({
        uri: 'https://mocks.alibaba-inc.com/user.json',
      }),
    },
    {
      id: 'orders',
      isInit: true,
      type: 'fetch',
      isSync: true,
      shouldFetch: () => false,
      options() {
        return {
          uri: 'https://mocks.alibaba-inc.com/orders.json',
          params: {
            userId: this.state.user.id,
          },
        };
      },
    },
  ],
};
