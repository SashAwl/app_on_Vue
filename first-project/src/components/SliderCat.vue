<template>
  <div class="center">
    <img src="../assets/cat1.jpg" alt="cat" class="big-img">
    <div class="collection">
      <img @click="makeBig" v-for="img in listImg" :key="img.id" :src="getImgUrl(img)" alt="cat" class="cat-item">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderCat',
  props: {},
  data () {
    return {
      listImg: ['cat1.jpg', 'cat2.jpg', 'cat3.jpg'],
      currentImg: 6
    }
  },
  methods: {
    makeBig () {

    },
    getImgUrl (img) {
      console.log(`../assets/${img}`)
      return `../assets/${img}`
    }
  }
}
</script>

<style scoped lang="scss">
.center{
  max-width: 1300px;
}
.collection{
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-bottom: 30px;
  padding-top: 30px;
}
.cat-item {
    width: 200px;
    border: 1px solid rgb(148, 144, 144);
    border-radius: 20px ;
}
.big-img {
  border: 10px solid grey;
  border-radius: 20px;
}
</style>
