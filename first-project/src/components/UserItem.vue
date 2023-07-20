<template>
    <div class="userItem">
        <p> {{ nameUser }} {{ surnameUser }}, {{ emailUser }}</p>
    </div>
</template>

<script>
export default {
  name: 'UserItem',
  data () {
    return {

    }
  },
  props: ['nameUser', 'surnameUser', 'emailUser']
}
</script>

<style scoped lang="scss">
  .userItem {
    border-radius: 15px;
    background-color: rgb(225, 235, 231);
    width: 400px;
    padding: 15px;
    text-align: start;
  }
  .userItem~.userItem {
    margin-top: 10px;
  }
</style>
