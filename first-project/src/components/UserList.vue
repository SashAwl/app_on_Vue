<template>
    <div>
        <h3>Пользователи</h3>
        <div class="users">
            <UserItem v-for="user in userOne" :key="user.id" :nameUser="user.name" :surnameUser="user.surname" :emailUser="user.email"/>
        </div>
    </div>
</template>

<script>
import UserItem from './UserItem.vue'

export default {
  name: 'UserList',
  props: ['userOne'],
  data () {
  },
  components: {
    UserItem
  }
}
</script>

<style scoped lang="scss"></style>
