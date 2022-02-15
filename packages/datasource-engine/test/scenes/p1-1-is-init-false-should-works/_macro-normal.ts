import {
  InterpretDataSource,
  IDataSourceEngine,
  IDataSourceRuntimeContext,
  RuntimeDataSource,
  RuntimeDataSourceStatus,
} from '@alilc/lowcode-types';
import sinon from 'sinon';

import { bindRuntimeContext, delay, MockContext } from '../../_helpers';

import type { ExecutionContext, Macro } from 'ava';
import type { SinonFakeTimers } from 'sinon';
import { DATA_SOURCE_SCHEMA } from './_datasource-schema';

export const normalScene: Macro<
  [
    {
      create: (dataSource: any, ctx: IDataSourceRuntimeContext, options: any) => IDataSourceEngine;
      dataSource: RuntimeDataSource | InterpretDataSource;
    },
  ]
> = async (t: ExecutionContext<{ clock: SinonFakeTimers }>, { create, dataSource }) => {
  const { clock } = t.context;
  const ORDERS_ERROR_MSG = 'the orders request should not fetch, please check the condition';

  const USER_DATA = {
    name: 'Alice',
    age: 18,
  };

  const fetchHandler = sinon.fake(async () => {
    await delay(100);
    return {
      data: USER_DATA,
    };
  });

  const context = new MockContext<Record<string, unknown>>(
    {},
    (ctx) =>
      create(bindRuntimeContext(dataSource, ctx), ctx, {
        requestHandlersMap: {
          fetch: fetchHandler,
        },
      }),
    {
      recordError() {},
    },
  );

  const setState = sinon.spy(context, 'setState');
  // const recordError = sinon.spy(context, 'recordError');

  // 一开始应该是初始状态
  t.is(context.dataSourceMap.user.status, RuntimeDataSourceStatus.Initial);

  const loading = context.reloadDataSource();

  await clock.tickAsync(50);

  // 因为是 isInit 为 false，所以不会被加载，一直处于初始态
  t.is(context.dataSourceMap.user.status, RuntimeDataSourceStatus.Initial);

  await clock.tickAsync(50);

  // 因为是 isInit 为 false，所以不会被加载，一直处于初始态
  t.is(context.dataSourceMap.user.status, RuntimeDataSourceStatus.Initial);

  await Promise.all([clock.runAllAsync(), loading]);

  // 因为是 isInit 为 false，所以不会被加载，一直处于初始态
  t.is(context.dataSourceMap.user.status, RuntimeDataSourceStatus.Initial);

  // 检查数据源的数据
  t.is(context.dataSourceMap.user.data, undefined);

  // 检查状态数据
  t.assert(setState.notCalled);
  t.is(context.state.user, undefined);

  // fetchHandler 应该未被调用
  t.assert(fetchHandler.notCalled);
};

normalScene.title = (providedTitle) => providedTitle || 'normal scene';
