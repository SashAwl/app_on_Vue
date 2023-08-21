<template>
    <div>
        {{ getCount }}
        <button @click="upCount">+</button>
        <button @click="downCount">-</button>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'MyCounter',
    computed: {
        ...mapGetters(['getCount'])
    },
    methods: {
        ...mapMutations(['INCREMENT', 'DECREMENT']),
        upCount() {
            this.INCREMENT()
        },
        downCount() {
            this.DECREMENT()
        }
    }   
}
</script>

<style scoped lang="scss"></style>