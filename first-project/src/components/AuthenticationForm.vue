<template>
  <div class="form">
    <h3>Авторизация</h3>
    <form class="auth" action="#" v-if="!this.isAuthentication">
      <input class="form-item" v-model="login" type="text" placeholder="Введите логин">
      <input class="form-item" v-model="password" type="text" placeholder="Введите пароль">
      <button @click="checkData()" class="form-item" type="submit">Войти</button>
    </form>
    <p v-if="this.isAuthentication || this.errorRespons"> {{ response }}</p>
  </div>
</template>

<script>
export default {
  name: 'AuthenticationForm',
  data () {
    return {
      isAuthentication: false,
      login: '',
      password: '',
      trueData: {
        login: '123',
        password: '123'
      },
      response: 'Вы успешно авторизованы',
      errorRespons: false
    }
  },
  methods: {
    checkData () {
      if (this.login === this.trueData.login && this.password === this.trueData.password) {
        this.isAuthentication = true
        this.response = 'Вы успешно авторизованы'
      } else {
        this.errorRespons = true
        this.response = 'Не верно введены логин или пароль'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.form {
  margin: 50px 0;
  width: 260px;
  border: 1px solid rgb(209, 206, 206);
  border-radius: 30px;
  padding: 10px;
}
.auth {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0 30px;
}
.form-item ~ .form-item {
  margin-top  : 10px;
}
</style>
