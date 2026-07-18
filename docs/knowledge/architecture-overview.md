# Architecture Overview

## 系统定位

完全运行在浏览器中的闯关式 SQL 学习与自由练习应用。

## 主链路

```text
选择关卡 → 阅读任务 → 浏览器执行 SQL → 比对结果 → 查看提示 → 进入下一关
```

## 模块边界

- src/core/ SQL 执行和状态
- src/levels/ 教学关卡
- src/components/ 交互
- public/ 静态资源

## 技术栈

Vue 3、TypeScript、Vite、Pinia、Monaco Editor、sql.js。

## 运行时依赖与失败模型

sql.js 运行语义与真实数据库存在差异；关卡 SQL 是产品内容也是测试夹具；既有 SqlResult 类型需后续收敛。外部依赖不可用时，系统应返回明确失败或采用文档化的保守降级；不得产生看似成功但不可审计的结果。

## 变更检查表

- 公共模型或接口是否影响多个模块？
- 配置键、扫描路径、Mapper namespace 或 SPI 文件是否同步？
- 新增外部调用是否有超时、限流和错误语义？
- 日志是否避开凭据与个人数据？
- README、CONTEXT 和 ADR 是否仍与实现一致？
