<template>
  <a-modal v-model:visible="visible" title="关于项目" :footer="null" width="400px" centered @cancel="handleClose">
    <div class="about-content">
      <h3>SQL之母</h3>
      <p>一个在浏览器中运行的交互式 SQL 学习工具，支持关卡练习与自由沙箱。</p>
      <p>当前二次开发版本由 <strong>threetwoa</strong> 维护。</p>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  visible: boolean;
}

const props = withDefaults(defineProps<Props>(), { visible: false });
const emit = defineEmits(["update:visible"]);

/** 将弹窗内部的关闭操作同步回父组件，保持 v-model 单向数据流。 */
const visible = computed({
  get: () => props.visible,
  set: (value: boolean) => emit("update:visible", value),
});

const handleClose = () => {
  visible.value = false;
};
</script>

<style scoped>
.about-content { color: #334155; line-height: 1.7; }
.about-content h3 { margin-bottom: 8px; color: #0f172a; }
.about-content p { margin-bottom: 12px; }
</style>
