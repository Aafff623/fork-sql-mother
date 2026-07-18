import mainLevels from "./mainLevels";
import customLevels from "./customLevels";

/** 统一的关卡顺序：主线优先，再追加独立场景关卡。 */
export const allLevels = [...mainLevels, ...customLevels];

/**
 * 按稳定 key 解析关卡。
 * 对未知 key 回退到第一关，避免旧版持久化数据导致页面空白。
 */
export const getLevelByKey = (levelKey: string) => {
  return (
    allLevels.find((level) => {
      return level.key === levelKey;
    }) || allLevels[0]
  );
};

/** @returns 关卡在全局顺序中的下标；未注册时返回 `-1`。 */
export const getCurrentLevelNum = (currentLevel: LevelType) => {
  return allLevels.findIndex(
    (level: LevelType) => level.key === currentLevel.key
  );
};

/** @returns 上一关；已在起点或关卡未注册时返回 `undefined`。 */
export const getPrevLevel = (currentLevel: LevelType) => {
  const num = getCurrentLevelNum(currentLevel);
  if (num <= 0) {
    return;
  }
  return allLevels[num - 1];
};

/** @returns 下一关；已在末尾时返回 `undefined`。 */
export const getNextLevel = (currentLevel: LevelType) => {
  const num = getCurrentLevelNum(currentLevel);
  if (num >= allLevels.length - 1) {
    return;
  }
  return allLevels[num + 1];
};
