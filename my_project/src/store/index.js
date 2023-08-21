import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentCount: 0,
    dataList: []
    },
  getters: {
    getCount: (state) => state.currentCount,
    getDataList: (state) => state.dataList
  },
  mutations: {
    INCREMENT(state) {
      state.currentCount++
    },
    DECREMENT(state) {
      state.currentCount--
    },
    LOAD_DATA(state, data) {
      state.dataList = data
    }
  },
  actions: {
    fetchData({commit}) {
      setTimeout(() => {
        const dataArr = [
          {
            name: 'Shirt',
            price: 30
          },
          {
            name: 'Skirt',
            price: 50
          },
          {
            name: 'Blouse',
            price: 150
          }
        ]
        commit('LOAD_DATA', dataArr)
      },1000)
    }
  },
  modules: {
  }
})
