<template>
<div>
    <ul>
        <li v-for="item in dataList" :key="item.index">{{ item.name }}  {{ item.price }}</li>
    </ul>
    <!-- {{getDataList}} -->
</div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
    name: 'DataLoader',
    computed: {
        ...mapState(['dataList'])  
    },
    methods:{
        ...mapMutations(['LOAD_DATA']),
        ...mapActions(['fetchData']) 
    },
    created() {
        this.LOAD_DATA(this.fetchData())
    }
}
</script>

<style scoped lang="scss"></style>