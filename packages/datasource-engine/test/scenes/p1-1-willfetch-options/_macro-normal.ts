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
  const ERROR_MSG = 'test error';

  const context = new MockContext<Record<string, unknown>>({}, (ctx) =>
    create(bindRuntimeContext(dataSource, ctx), ctx),
  );

  const setState = sinon.spy(context, 'setState');

  // 一开始应该是初始状态
  t.is(context.dataSourceMap.user.status, RuntimeDataSourceStatus.Initial);

  const reload = context.reloadDataSource();

  await clock.tickAsync(50);

  // 中间应该有 loading 态
  t.is(context.dataSourceMap.user.isLoading, true);

  // TODO: 暂时不透出options，先不做deepEqual

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
