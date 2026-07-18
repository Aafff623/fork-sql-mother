import initSqlJs, { Database, SqlJsStatic } from "sql.js";

/** 缓存 sql.js 运行时，避免每次创建数据库都重复加载 WASM。 */
let SQL: SqlJsStatic;

/**
 * 创建隔离的内存数据库，并可选执行关卡初始化脚本。
 * @param initSql 可包含多条语句的初始化 SQL。非法 SQL 会由 sql.js 原样抛出。
 * @returns 全新的内存数据库，调用方负责在使用完成后关闭。
 */
export const initDB = async (initSql?: string) => {
  if (!SQL) {
    SQL = await initSqlJs({
      // 固定从站点根目录加载 WASM，保持 Vite 构建与本地开发行为一致。
      locateFile: () => "./sql-wasm.wasm",
    });
  }
  const db = new SQL.Database();
  if (initSql) {
    db.run(initSql);
  }
  return db;
};

/**
 * 在指定数据库上执行查询，保留 sql.js 的多结果集返回格式。
 * @throws 语法错误或引用不存在的表时，由 sql.js 抛出异常。
 */
export const runSQL = (db: Database, sql: string) => {
  return db.exec(sql);
};
