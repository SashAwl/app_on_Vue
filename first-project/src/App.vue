<template>
  <div id="app">
    <img alt="Vue welcome" src="./assets/img1.jpg">
    <HelloComponent msg="Приветствем вас великодушно!" />
    <AuthenticationForm class="formAuth"/>
    <CreditCalc/>
    <UserList :userOne="this.userList"/>
    <ProductDetails/>
    <SliderCat/>
  </div>
</template>

<script>
import HelloComponent from './components/HelloComponent.vue'
import SliderCat from './components/SliderCat.vue'
import AuthenticationForm from './components/AuthenticationForm.vue'
import UserList from './components/UserList.vue'
import CreditCalc from './components/CreditCalc.vue'
import ProductDetails from './components/ProductDetails.vue'

export default {
  name: 'App',
  components: {
    HelloComponent,
    SliderCat,
    AuthenticationForm,
    UserList,
    CreditCalc,
    ProductDetails
  },
  data () {
    return {
      userList: [
        { name: 'Sasha', surname: 'Shilova', email: 'alex@gmail.com' },
        { name: 'Dasha', surname: 'Milova', email: 'mlex@gmail.com' },
        { name: 'Masha', surname: 'Tilova', email: 'tlex@gmail.com' },
        { name: 'Glasha', surname: 'Polova', email: 'plex@gmail.com' },
        { name: 'Pasha', surname: 'Golov', email: 'glex@gmail.com' },
        { name: 'Misha', surname: 'Frolov', email: 'frex@gmail.com' }
      ]
    }
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
  position: relative;
  padding-left: 50px;
  padding-right: 50px;
}
.formAuth{
  position: absolute;
  right: 20px;
  top: 0;
}
</style>
