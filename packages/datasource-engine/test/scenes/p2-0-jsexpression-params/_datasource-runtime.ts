import { RuntimeDataSource } from '@alilc/lowcode-types';

// 这里仅仅是数据源部分的:
// @see: https://yuque.antfin-inc.com/mo/spec/spec-low-code-building-schema#XMeF5
export const dataSource: RuntimeDataSource = {
  list: [
    {
      id: 'urlParams',
      isInit: true,
      type: 'urlParams',
    },
    {
      id: 'user',
      isInit: true,
      type: 'custom',
      isSync: true,
      requestHandler: options => {
        return new Promise(res => {
          setTimeout(() => {
            // test return data
            res({
              data: {
                id: 9527,
                name: 'Alice',
                uri: options.uri,
              },
            });
          }, 1000);
        });
      },
      options() {
        return {
          uri: 'https://mocks.alibaba-inc.com/user.json',
          params: {
            age: 8,
            school: {
              name: this.state.urlParams.name,
              area: this.state.urlParams.area
            }
          }
        };
      },
    },
  ],
};
