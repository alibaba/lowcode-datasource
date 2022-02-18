# 关于此场景

一些场景下，不能自动加载数据源，这时候会设置 `isInit=false`，这样的数据源应该最终不会在 `this.reloadDataSource()` 中被加载。
