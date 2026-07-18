<template>
  <div id="app">
    <a-row class="header" type="flex" align="middle">
      <a-col flex="160px" style="margin: 0 auto">
        <RouterLink to="/">
          <a-row align="middle">
            <img src="./assets/logo.png" alt="SQL之母" class="logo" />
            <span class="title">SQL之母</span>
          </a-row>
        </RouterLink>
      </a-col>
      <a-col flex="auto">
        <a-menu
          :selected-keys="selectedKeys"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
          @click="doClickMenu"
        >
          <a-menu-item key="/learn">学习</a-menu-item>
          <a-menu-item key="/levels">关卡</a-menu-item>
          <a-menu-item key="/playground">广场</a-menu-item>
          <a-menu-item key="about">
            <span @click.stop="showAboutModal" style="cursor: pointer; display: inline-block; width: 100%;">
              <user-outlined />
              关于项目
            </span>
          </a-menu-item>
          <a-menu-item>
            <a href="https://github.com/Aafff623/fork-sql-mother" target="_blank">
              <github-outlined />
              源代码
            </a>
          </a-menu-item>
        </a-menu>
      </a-col>
    </a-row>
    <div class="content">
      <router-view />
    </div>
    <div class="footer">
      <p>
        SQL之母 ©{{ currentYear }} · 由 threetwoa 维护
      </p>
    </div>
    <a-back-top :style="{ right: '24px' }" />
    
    <!-- 项目信息使用独立弹窗，避免导航层承担详细文案。 -->
    <AboutAuthorModal v-model:visible="aboutModalVisible" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { 
  GithubOutlined, 
  UserOutlined 
} from "@ant-design/icons-vue";
import AboutAuthorModal from "./components/AboutAuthorModal.vue";

const route = useRoute();
const router = useRouter();
const selectedKeys = computed(() => [route.path]);

// 年份在跨年后自动更新，不需要手工修改页脚。
const currentYear = computed(() => new Date().getFullYear());

const aboutModalVisible = ref(false);

const showAboutModal = () => {
  aboutModalVisible.value = true;
};

const doClickMenu = ({ key }: any) => {
  // about 菜单只控制弹窗，其余键值与路由路径保持一致。
  if (key && key !== "about") {
    router.push({
      path: key,
    });
  }
};
</script>

<style scoped>
.header {
  border-bottom: 1px solid #f0f0f0;
  padding: 0 24px;
}

.ant-menu-horizontal {
  border-bottom: none !important;
}

.logo {
  width: 56px;
}

.title {
  margin-left: 8px;
  font-size: 20px;
  color: #000;
}

.content {
  padding: 24px;
}

.footer {
  padding: 12px;
  text-align: center;
  background: #efefef;

  p {
    margin-bottom: 4px;
  }
}
</style>
