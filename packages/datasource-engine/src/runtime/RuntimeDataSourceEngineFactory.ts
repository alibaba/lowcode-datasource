/* eslint-disable @typescript-eslint/indent */
import {
  IRuntimeDataSource,
  IDataSourceRuntimeContext,
  RequestHandlersMap,
  RuntimeDataSourceConfig,
  RuntimeDataSource,
  DataHandler,
} from '@alilc/lowcode-types';

import { RuntimeDataSourceItem } from '../core';
import { reloadDataSourceFactory } from '../core/reloadDataSourceFactory';
import { defaultDataHandler, defaultShouldFetch, defaultWillFetch, getRequestHandler } from '../helpers';

/**
 * @param dataSource
 * @param context
 * @param extraConfig: { requestHandlersMap }
 */

export default (
  dataSource: RuntimeDataSource,
  context: IDataSourceRuntimeContext,
  extraConfig: {
    requestHandlersMap: RequestHandlersMap<{ data: unknown }>;
    defaultDataHandler?: DataHandler;
  } = { requestHandlersMap: {} },
) => {
  const { requestHandlersMap } = extraConfig;

  // TODO: 对于出码类型，需要做一层数据兼容，给一些必要的值设置默认值,先兜底几个必要的
  dataSource.list.forEach((ds) => {
    ds.isInit = (
      typeof ds.isInit === 'function'
        ? (ds as unknown as { isInit(): boolean }).isInit.bind(context)
        : ds.isInit ?? true
    ) as any;
    ds.isSync = ds.isSync ?? false;
    // eslint-disable-next-line no-nested-ternary
    ds.shouldFetch = !ds.shouldFetch
      ? defaultShouldFetch
      : typeof ds.shouldFetch === 'function'
      ? ds.shouldFetch.bind(context)
      : ds.shouldFetch;
    ds.willFetch = ds.willFetch ? ds.willFetch.bind(context) : defaultWillFetch;
    const finalDataHandler = extraConfig.defaultDataHandler || defaultDataHandler;
    ds.dataHandler = ds.dataHandler ? ds.dataHandler.bind(context) : finalDataHandler;
  });

  const dataSourceMap = dataSource.list.reduce(
    (prev: Record<string, IRuntimeDataSource>, current: RuntimeDataSourceConfig) => {
      prev[current.id] = new RuntimeDataSourceItem(current, getRequestHandler(current, requestHandlersMap), context);
      return prev;
    },
    {},
  );

  return {
    dataSourceMap,
    reloadDataSource: reloadDataSourceFactory(dataSource, dataSourceMap, dataSource.dataHandler),
  };
};
