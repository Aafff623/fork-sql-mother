<p align="center">
  <h1 align="center">SQL之母 — 交互式 SQL 学习工具</h1>
  <p align="center"><em>在浏览器中建表、查询、验证，通过渐进关卡掌握 SQL</em></p>
</p>

<p align="center"><img src="assets/images/readme/banner.png" alt="SQL之母 Banner" width="100%"></p>

<p align="center">
  <img src="https://img.shields.io/badge/Vue-3-42b883?style=for-the-badge&labelColor=0f172a" alt="Vue 3">
  <img src="https://img.shields.io/badge/TypeScript-4.6-3178c6?style=for-the-badge&labelColor=0f172a" alt="TypeScript">
  <img src="https://img.shields.io/badge/SQL.js-Browser-f59e0b?style=for-the-badge&labelColor=0f172a" alt="SQL.js">
</p>

<p align="center"><a href="#产品定位">定位</a> · <a href="#能力矩阵">能力</a> · <a href="#快速开始">快速开始</a> · <a href="#架构">架构</a> · <a href="#模块阅读顺序">阅读顺序</a></p>

---

## 产品定位

SQL之母是面向 SQL 初学者的纯前端练习环境。关卡提供数据、问题与参考结果；沙箱允许自由执行 SQL。数据库在浏览器内存中运行，适合本地学习和二次开发。

## 能力矩阵

| 能力 | 实现 | 边界 |
|---|---|---|
| 渐进关卡 | 主线与自定义关卡 | 题目与初始化 SQL 随前端发布 |
| 浏览器数据库 | sql.js / SQLite WASM | 刷新后内存数据库重建 |
| SQL 编辑 | Monaco Editor | 不连接远程生产库 |
| 进度恢复 | Pinia + localStorage | 仅当前浏览器 |
| 结果展示 | 表格化多结果集 | 错误保留 sql.js 语义 |

## 快速开始

```bash
git clone https://github.com/Aafff623/fork-sql-mother.git
cd fork-sql-mother
npm install
npm run dev
```

生产构建：

```bash
npm run build
```

## 架构

```text
Vue Pages / Components
        ↓
Pinia learning state ←→ localStorage
        ↓
Level registry → initialization SQL
        ↓
sqlExecutor → sql.js / SQLite WASM → result tables
```

| 路径 | 职责 |
|---|---|
| `src/pages/` | 学习、关卡与沙箱页面 |
| `src/components/` | 编辑器、表格和项目信息组件 |
| `src/core/sqlExecutor.ts` | WASM 加载、内存库创建和 SQL 执行 |
| `src/core/globalStore.ts` | 学习进度与当前关卡持久化 |
| `src/levels/` | 关卡元数据、题面与初始化数据 |

## 模块阅读顺序

1. `src/App.vue` — 应用壳与路由入口。
2. `src/levels/index.ts` — 关卡注册与前后导航。
3. `src/core/globalStore.ts` — 跨页面学习状态。
4. `src/core/sqlExecutor.ts` — SQL 运行时边界。
5. `src/pages/` — 用户操作如何组合上述模块。

## 维护与上游

当前二次开发版本由 **threetwoa** 维护。上游项目为 [liyupi/sql-mother](https://github.com/liyupi/sql-mother)；上游引用仅用于溯源，许可与第三方声明以仓库文件为准。

## 许可证

请查看仓库内的 `LICENSE` 及上游版权声明。
