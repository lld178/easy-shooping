import { reGetSearch } from '../../api'
export default {
  namespaced:true,
  state: {
     searchList: {}
  },
  actions: {
    async reGetSearch(context, v={}) {
      let result =  await reGetSearch(v)
      if (result.code === 200) {
        context.commit('REQGETSEARCH', result.data)
      }
    }
  },
  mutations: {
    REQGETSEARCH(state, v) {
      state.searchList = v
    }
  },
  getters: {
    goodsList(state) {
      return state.searchList.goodsList || []
    },
    attrsList(state) {
      return state.searchList.attrsList || []
    },
    trademarkList(state) {
      return state.searchList.trademarkList || []
    }
  }
}