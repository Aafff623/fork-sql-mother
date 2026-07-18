# Project Glossary

| 术语 | 含义 |
|---|---|
| Origin | `Aafff623/fork-sql-mother`，当前二开远程仓库 |
| Upstream | 原作者李鱼皮（liyupi）的原始项目远程，用于同步来源、历史与许可证信息 |
| Product root | src/core/ SQL 执行和状态；src/levels/ 教学关卡；src/components/ 交互；public/ 静态资源 |
| Main flow | 选择关卡 → 阅读任务 → 浏览器执行 SQL → 比对结果 → 查看提示 → 进入下一关 |
| Handoff | 实施前后的任务合同，记录范围、验证、风险和回滚 |
| ADR | 影响长期维护的架构决策记录 |
| Mock | 演示或降级数据；必须显式标注，不等同真实执行 |
| Secret | API Key、私钥、数据库口令等不得提交的运行凭据 |
