import { defineStore } from "pinia";
import { allLevels } from "../levels";

/**
 * 保存跨页面的学习进度和当前关卡。
 * Pinia 持久化插件会将状态写入 localStorage，因此该 store 只能在浏览器环境初始化。
 */
export const useGlobalStore = defineStore("global", {
  state: () => ({
    // 保留每个关卡的完成情况，用于进度视图和恢复学习位置。
    studyHistoryList: [],
    // 拷贝默认关卡，避免组件修改关卡注册表的共享对象。
    currentLevel: { ...allLevels[0] },
  }),
  getters: {},
  // 使用稳定键名保持旧版本的本地学习记录可继续读取。
  persist: {
    key: "global",
    storage: window.localStorage,
    beforeRestore: (context) => {
      console.log("load globalStore data start");
    },
    afterRestore: (context) => {
      console.log("load globalStore data end");
    },
  },
  actions: {
    reset() {
      this.$reset();
    },
  },
});
