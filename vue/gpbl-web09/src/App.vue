<template>
  <DemoComponent/>
  <demo-component></demo-component>
</template>

<script>

import DemoComponent from './components/Demo.vue'

export default {
  name: 'App',
  components: {
    DemoComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
