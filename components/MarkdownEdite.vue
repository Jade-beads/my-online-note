<template>
  <div>
    <mavon-editor :toolbars="markdownOptionRef" v-model="handbookRef"/>
  </div>
</template>

<script setup>
  const markdownOptionRef = reactive({
    bold: true,
  })
  let handbookRef =  ref("#### how to use mavonEditor in nuxt.js")
  const handChange = () => {
    handbookRef.value +=1
    console.log(handbookRef)
  }
</script>

<style scoped>

</style>
