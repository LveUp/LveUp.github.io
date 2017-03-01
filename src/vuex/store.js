import Vue from 'Vue'
import Vuex from 'Vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    aaaaa: false
  },
  mutations: {
    increment (state) {
      state.aaaaa = !state.aaaaa;
      console.log('m='+state.aaaaa)//有正确输出
    }
  },  
  actions:{
  	increm:({commit}) => commit('increment')
  },
  getters: {
    aaaaa (state) {
      console.log('g='+state.aaaaa)
      return  state.aaaaa
    }
  }
});
 export default store;
