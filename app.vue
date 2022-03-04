<template>
  <el-container>
    <el-header class="layout-header-wrapper">
      <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          router
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/edit-note">记笔记</el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside class="layout-aside-wrapper">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
        >
          <el-menu-item :index="i.toString()" v-for="i in 10">
            <el-icon><icon-menu /></el-icon>
            <span>Group {{ i }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <NuxtPage />
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'

const activeIndex = ref('1')

</script>
<style>
@import '/assets/css/global.css';
</style>
<style scoped>
.layout-header-wrapper {
  height: 60px;
}
.layout-header-wrapper .el-menu--horizontal {
  justify-content: flex-end;
  padding-right: 300px;
}
.layout-aside-wrapper {
  width: 200px;
  height: calc(100vh - 60px);
}
</style>

