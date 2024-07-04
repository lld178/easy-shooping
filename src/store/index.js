import Vue from "vue";
import vuex from 'vuex'
Vue.use(vuex)
import home from "./home";
import search from "./search";
import user from "./user";
export default new vuex.Store({
  // state: {
  //   num: 1
  // },
  // actions: {
    // jia(context, v) {
    //   context.commit('JIA', v)
    // },
    // jian(context, v) {
    //   context.commit('JIAN', v)
    // },
    // jiaOdd(context, v) {
    //   if (context.state.num % 2) {
    //     context.commit('JIA', v)
    //   }
    // },
    // jiaW(context, v) {
    //   setTimeout(() => {
    //     context.commit('JIA', v)
    //   }, 1000)
    // },
    // add(context, v) {
    //   context.commit('ADD', v)
    // },
   
  // },
  // mutations: {
    // JIA(state, b) {
    //   state.num += b
    // },
    // JIAN(state, b) {
    //   state.num -= b
    // },
    // addP(state, v) {
    //   state.persons.push(v)
    // }

  // },
  // getters: {
  //   bigSum(state) {
  //     return state.num * 10
  //   }
  // },
  namespaced:true,
  modules: {
    home,
    search,
    user
  }
})