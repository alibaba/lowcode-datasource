export type DataSourceOptions<TParams = Record<string, unknown>> = {
  [key: string]: unknown;
  uri?: string;
  params?: TParams;
  method?: string;
  isCors?: boolean;
  timeout?: number;
  headers?: Record<string, string>;
  isSync?: boolean;
};
