<template>
    <div class="product">
        <h3>{{ product.name }}</h3>
        <p>{{ formattedPrice }}</p>
        <p v-if="product.available">Available</p>
        <p v-else>Out of stock</p>
    </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  data () {
    return {
      product: {
        name: 'Shirt',
        price: 99.99,
        available: false
      }
    }
  },
  computed: {
    formattedPrice: function () {
      return `$${this.product.price}`
    }
  }
}
</script>

<style scoped lang="scss">
.product{
    border: 1px solid green;
    margin: 50px;
}
</style>
