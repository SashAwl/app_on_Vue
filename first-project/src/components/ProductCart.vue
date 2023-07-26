<template>
    <div class="block">
        <h3>Продуктовая корзина</h3>
        <div class="cards">
            <ProductCartItem v-for="(product,index) in products" :key="product.index" 
              :productItem="product" @changeData="getDataProduct(index,$event)"/>
        </div>
        <p>Общая стоимость товара {{ getTotalSum }} </p>
    </div>
</template>

<script>
import ProductCartItem from './ProductCartItem.vue'

export default {
  name: 'ProductCart',
  components: {
    ProductCartItem
  },
  data () {
    return {
      products: [
        { name: 'Shirt', price: 30, quantity: 0 },
        { name: 'Skirt', price: 50, quantity: 0 },
        { name: 'T-Shirt', price: 30, quantity: 0 }
      ],
    }
  },
  computed: {
    getTotalSum () {
        return this.products.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }
  },
  methods: {
    getDataProduct (index, data) {
        this.products[index].quantity = data
    }
  }
}
</script>

<style scoped lang="scss">
.cards{
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
}
.block{
    margin: 50px 0;
}
</style>
