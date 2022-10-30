<template>
  <div id="wrapper" class="wrapper">
    <the-sidebar></the-sidebar>
    <div id="headerAndMain" class="header-and-main">
      <the-header></the-header>
      <the-content></the-content>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheSidebar from './components/layout/TheSidebar.vue'
import TheContent from './components/layout/TheContent.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheSidebar,
    TheContent
  }
}
</script>

<style scoped>
@import url(./style/main.css);
</style>
