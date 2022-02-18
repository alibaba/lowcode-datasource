import {
  InterpretDataSource,
  IDataSourceEngine,
  IDataSourceRuntimeContext,
  RuntimeDataSource,
  RuntimeDataSourceStatus,
} from '@alilc/lowcode-types';
import sinon from 'sinon';

import { bindRuntimeContext, MockContext } from '../../_helpers';

import type { ExecutionContext, Macro } from 'ava';
import type { SinonFakeTimers } from 'sinon';

export const normalScene: Macro<
  [
    {
      create: (dataSource: any, ctx: IDataSourceRuntimeContext, options?: any) => IDataSourceEngine;
      dataSource: RuntimeDataSource | InterpretDataSource;
    },
  ]
> = async (t: ExecutionContext<{ clock: SinonFakeTimers }>, { create, dataSource }) => {
  const { clock } = t.context;

  const USER_DATA = {
    id: 9527,
    name: 'Alice',
    uri: 'https://mocks.alibaba-inc.com/user.json',
  };

  const URL_PARAMS = {
    name: '力学小学',
    area: 'nanjing',
  };


  const ERROR_MSG = 'test error';

  const urlParamsHandler = sinon.fake(async () => {
    return URL_PARAMS; // TODO: 别的都是返回的套了一层 data 的，但是 urlParams 的为啥不一样？
  });

  const context = new MockContext<Record<string, unknown>>({}, (ctx) =>
    create(bindRuntimeContext(dataSource, ctx), ctx, {
      requestHandlersMap: {
        urlParams: urlParamsHandler,
      },
    }),
  );

  const setState = sinon.spy(context, 'setState');

  // 一开始应该是初始状态
  t.is(context.dataSourceMap.urlParams.status, RuntimeDataSourceStatus.Initial);
  t.is(context.dataSourceMap.user.status, RuntimeDataSourceStatus.Initial);

  const reload = context.reloadDataSource();

  // await Promise.all([clock.runAllAsync(), loading]);

  await clock.tickAsync(50);

  t.is(context.dataSourceMap.urlParams.status, RuntimeDataSourceStatus.Loaded);

  await clock.tickAsync(50);

  // 中间应该有 loading 态
  t.is(context.dataSourceMap.user.isLoading, true);

  // TODO: 暂时不透出options，先不做deepEqual

  console.log(context.dataSourceMap.user);
  // 检测参数是否正确
  // t.deepEqual(context.dataSourceMap.user.options.params, {
  //   name: 'Alice',
  //   age: 8
  // });

  await clock.tickAsync(1050);

  // await clock.tickAsync(1050);

  const load = context.dataSourceMap.user.load({
    name: 'Tom',
    age: 30,
    company: 'alibaba'
  });

  await clock.tickAsync(1500);

 // TODO: 暂时不透出options，先不做deepEqual
  //   // 检测参数是否正确
  // t.deepEqual(context.dataSourceMap.user.options.params, {
  //   name: 'Tom',
  //   age: 30,
  //   company: 'alibaba'
  // });

  await Promise.all([clock.runAllAsync(), reload]);

  // 最后 user 应该成功了，loaded
  t.is(context.dataSourceMap.user.status, RuntimeDataSourceStatus.Loaded);

};

normalScene.title = (providedTitle) => providedTitle || 'normal scene';
