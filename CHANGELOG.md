# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.1.0](https://github.com/alibaba/lowcode-datasource/compare/v1.0.1...v1.1.0) (2022-06-20)


### Features

* 🎸 为数据源引擎增加 module 入口, 以便支持 vite 和 snowpack 等现代构建工具 ([9e37434](https://github.com/alibaba/lowcode-datasource/commit/9e3743423471e9e11e2181b401f6f54b4e3dc726))





## [1.0.1](https://github.com/alibaba/lowcode-datasource/compare/v1.0.0...v1.0.1) (2022-03-17)


### Bug Fixes

* 🐛 修复部分异常JSExpression返回值，减少Error ([3107aad](https://github.com/alibaba/lowcode-datasource/commit/3107aad3735379c28aef6d1d971c6ffb76ef9508))





# 1.0.0 (2022-02-15)


### Features

* 🎸 提交开源版本 ([453516f](https://github.com/alibaba/lowcode-datasource/commit/453516ffcb25868a6d6f380ec8967a36bb474089))





# [1.0.0](https://github.com/alibaba/lowcode-datasource/compare/v1.0.0-beta.0...v1.0.0) (2022-02-15)


### Features

* 🎸 开源版本代码提交 ([22ae404](https://github.com/alibaba/lowcode-datasource/commit/22ae404e624b66e0c9dc18aa4b3a9b6195149136))
* 🎸 提交开源版本 ([b410ce2](https://github.com/alibaba/lowcode-datasource/commit/b410ce240c2eca07955a3af040428bbcb2729ed7))
* 🎸 提交开源版本 ([22a338a](https://github.com/alibaba/lowcode-datasource/commit/22a338a989356cc0f58b276ab3062904b5f005c3))





# [1.0.0](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.0-beta.0...v1.0.0) (2022-02-15)


### Features

* 🎸 开源版本代码提交 ([22ae404](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/commit/22ae404e624b66e0c9dc18aa4b3a9b6195149136))





# [1.0.0](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.29...v1.0.0) (2022-01-20)


### Bug Fixes

* 🐛 修复参数深度合并问题 ([e1868b5](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/commit/e1868b5120dffc798c6278ea016c424a536e3b2a))


### Features

* 🎸 开源新包 ([16c5589](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/commit/16c558982f852a009a2c48af7c84629865f0fa7f))





## [1.0.26-alpha.2](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.26-alpha.1...v1.0.26-alpha.2) (2021-12-14)

**Note:** Version bump only for package ali-lowcode-datasource





## [1.0.26-alpha.1](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.26-alpha.0...v1.0.26-alpha.1) (2021-12-12)

**Note:** Version bump only for package ali-lowcode-datasource





## [1.0.26-alpha.0](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.25-alpha.0...v1.0.26-alpha.0) (2021-12-12)

**Note:** Version bump only for package ali-lowcode-datasource





## [1.0.25-alpha.0](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.24...v1.0.25-alpha.0) (2021-12-12)


### Bug Fixes

* 🐛 修复load时params跟willfetch无关问题 ([83992c7](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/commit/83992c7475b62e75b9f366b9282d538428d081e5))





## [1.0.24](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.24-beta.14...v1.0.24) (2021-10-08)


### Bug Fixes

* 🐛 解决 isInit=false 的时候通过 interpret 模式却还自动加载了数据源的问题 ([c010512](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/commit/c01051210b349ef8da53403fdf296b005eac7c78))
* 🐛 修复运行时 isInit 配置为 false 但是依然还是会加载数据源的问题 ([703d7e3](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/commit/703d7e3e0259fde9908b5efde5e0a2f52157b0ef))





## [1.0.24-beta.14](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.24-beta.13...v1.0.24-beta.14) (2021-03-18)


### Bug Fixes

* 🐛 修复 buildJsonObj 对于 JSONObject 类型的解析 ([a4bcff5](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/commit/a4bcff584ba7c328dcc7c9f4c7f27864b7386d29))
* 🐛 数据源出现错误状态的时候也应该触发下页面重绘, 临时用 setState 搞下, 后面再讨论下如何搞 ([23b680a](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/commit/23b680aa140573fa94953779aaba34ef4c26299f))
* 🐛 解决 TypeError: #<Object> is not a constructor ([8478c33](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/commit/8478c33af3dc50704fa10cd76d72767e31c46a96))
* 🐛 解决数据源状态改变后没有触发页面渲染的问题 ([66351de](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/commit/66351deb72df2f1417891bc5f39d7b0d7ecad9ea))
* readme ([cef06dd](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/commit/cef06ddfb7632fb57bfca26d90f892026f4eb3fa))
* version update ([e8b2715](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/commit/e8b2715f1a94cda81f077c641b953f66ffcb4e16))



## [1.0.24-hotfix-runtime.1](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.24-beta.10...v1.0.24-hotfix-runtime.1) (2021-01-14)


### Bug Fixes

* 解决 runtime 模式下设置 isInit=false 不生效的问题 ([1f8109c](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/commit/1f8109c83aa54df9188d51536b7a95d20742879b))





## [1.0.24-beta.13](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.24-beta.12...v1.0.24-beta.13) (2021-02-02)


### Bug Fixes

* update version ([6dea344](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/commit/6dea34469a1a03b710b3544ce42b8d9aa208e35f))
* 小程序的 sendMtop 设置域名的兼容处理 ([ebb53e6](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/commit/ebb53e63636dde4b3d30bd82eca0b59ca994259c))
* 小程序的 sendMtop 设置域名的兼容处理 ([24c377f](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/commit/24c377f53f24e272835f8e2be7d44055fb190f5a))





## [1.0.24-beta.12](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.24-beta.10...v1.0.24-beta.12) (2021-02-02)


### Bug Fixes

* mtop handler 透传额外的参数 ([f7212d2](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/commit/f7212d2dfb36dc54cb8a73e2eb774ff99b2f373f))





## [1.0.24-beta.11](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.24-beta.10...v1.0.24-beta.11) (2021-02-02)


### Bug Fixes

* mtop handler 透传额外的参数 ([f7212d2](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/commit/f7212d2dfb36dc54cb8a73e2eb774ff99b2f373f))





## [1.0.24-beta.10](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.24-beta.9...v1.0.24-beta.10) (2020-12-09)

**Note:** Version bump only for package ali-lowcode-datasource





## [1.0.24-beta.9](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.24-beta.8...v1.0.24-beta.9) (2020-12-09)

**Note:** Version bump only for package ali-lowcode-datasource





## [1.0.24-beta.8](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.24-beta.7...v1.0.24-beta.8) (2020-12-09)

**Note:** Version bump only for package ali-lowcode-datasource





## [1.0.24-beta.7](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.24-beta.6...v1.0.24-beta.7) (2020-12-09)

**Note:** Version bump only for package ali-lowcode-datasource





## [1.0.24-beta.1](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.24-beta.6...v1.0.24-beta.1) (2020-12-09)

**Note:** Version bump only for package ali-lowcode-datasource





## [1.0.24-beta.0](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.24-beta.6...v1.0.24-beta.0) (2020-12-09)

**Note:** Version bump only for package ali-lowcode-datasource





## [1.0.24-beta.6](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.24-beta.5...v1.0.24-beta.6) (2020-12-09)

**Note:** Version bump only for package ali-lowcode-datasource





## [1.0.24-beta.5](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.24-beta.4...v1.0.24-beta.5) (2020-12-09)

**Note:** Version bump only for package ali-lowcode-datasource





## [1.0.24-beta.4](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.24-beta.3...v1.0.24-beta.4) (2020-12-09)

**Note:** Version bump only for package ali-lowcode-datasource





## [1.0.24-beta.0](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.24-beta.3...v1.0.24-beta.0) (2020-12-09)

**Note:** Version bump only for package ali-lowcode-datasource





## [1.0.24-beta.3](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.24-beta.2...v1.0.24-beta.3) (2020-12-09)

**Note:** Version bump only for package ali-lowcode-datasource





## [1.0.24-beta.2](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.24-beta.1...v1.0.24-beta.2) (2020-12-09)

**Note:** Version bump only for package ali-lowcode-datasource





## [1.0.24-beta.1](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/compare/v1.0.24-beta.0...v1.0.24-beta.1) (2020-12-09)

**Note:** Version bump only for package ali-lowcode-datasource





## 1.0.24-beta.0 (2020-12-09)


### Bug Fixes

* replace promise.allsettled ([afad34c](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/commit/afad34c159c05823a482bcbf991c6b9075ae80cc))


### Features

* 新增构建信息 ([51086c3](https://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-datasource/commit/51086c36be23f8681c6f9740052ce48e6fc1f468))
