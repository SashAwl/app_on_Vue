<template>
  <div id="app">
    <img alt="Vue welcome" src="./assets/img1.jpg">
    <HelloComponent msg="Приветствем вас великодушно!" />
    <SliderCat/>
  </div>
</template>

<script>
import HelloComponent from './components/HelloComponent.vue'
import SliderCat from './components/SliderCat.vue'

export default {
  name: 'App',
  components: {
    HelloComponent,
    SliderCat
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
}
</style>
