<template>
  <div class="edit-note-page">
    <div class="header-wrapper">
      <el-button @click="saveText">保存</el-button>
    </div>
    <markdown-edite></markdown-edite>
  </div>
</template>

<script setup>
  const saveText = () => {
    console.log(1)
  }
</script>

<style scoped>

</style>
