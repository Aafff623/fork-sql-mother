# SQL 之母 · Context

## 一句话定位

完全运行在浏览器中的闯关式 SQL 学习与自由练习应用。

## 产品主链路

选择关卡 → 阅读任务 → 浏览器执行 SQL → 比对结果 → 查看提示 → 进入下一关。

## 代码边界

src/core/ SQL 执行和状态；src/levels/ 教学关卡；src/components/ 交互；public/ 静态资源。

## 技术与运行环境

Vue 3、TypeScript、Vite、Pinia、Monaco Editor、sql.js。

## 当前事实

- 当前二开维护者为 `threetwoa`。
- `origin` 指向增强仓，`upstream` 指向原始项目。
- 最近二开提交 `16d73d4` 完成身份迁移、营销清理、核心注释和 README 重构。
- 上游里程碑：831988c：上游 README 更新；后续提交加入难度、自定义关卡与作者弹窗。

## 关键风险

sql.js 运行语义与真实数据库存在差异；关卡 SQL 是产品内容也是测试夹具；既有 SqlResult 类型需后续收敛。

## 推荐阅读顺序

1. README：产品定位与启动入口。
2. 本文件与 `docs/agents/domain.md`：边界和术语。
3. 入口模块与主链路服务。
4. 配置、持久化、测试和部署文件。
5. `docs/adr/` 与 `docs/output/handoff/`：决策和已交付变更。
