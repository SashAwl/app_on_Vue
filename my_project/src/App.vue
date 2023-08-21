<template>
  <div id="app">
    <MyCounter/>
    <DataLoader/>
  </div>
</template>

<script>
import DataLoader from './components/DataLoader.vue';
import MyCounter from './components/MyCounter.vue'

export default {
  name: 'App',
  components: {
    MyCounter,
    DataLoader
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
