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
    }
  },  
  actions:{
  	increm:({commit}) => commit('increment')
  },
  getters: {
    aaaaa (state) {
      return  state.aaaaa
    }
  }
});
 export default store;
