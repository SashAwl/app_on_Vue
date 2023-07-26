<template>
    <div class="card">
        <h2>{{ productItem.name }}</h2>
        <p>{{ productItem.price }}</p>
        <input class="count" type="number" min="0" v-model="currentCount" @change="changeTotalSum">
        <p>Товар на сумму {{ subTotal }}</p>
    </div>
</template>

<script>
export default {
  name: 'ProductCartItem',
  props: ['productItem'],
  data () {
    return {
      currentCount: 0,

    }
  },
  computed: {
    subTotal () {
      return this.productItem.price * this.currentCount
    }
  },
  methods: {
    changeTotalSum () {
      return this.$emit('changeData', this.currentCount)
    }
  }
}
</script>

<style scoped lang="scss">
.card{
    border-radius: 30px;
    background-color: rgb(231, 235, 235);
    padding: 10px;
}
.count{
    border-color: rgb(221, 219, 219);
    border-radius: 5px;
    text-align: right;
}
</style>
