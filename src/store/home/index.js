import { reqCategoryList } from '../../api'

export default {
  namespaced:true,
  state: {
    categoryList:[]
  },
  actions: {
    async categoryList(context) {
      let result = await reqCategoryList()
      if (result.code === 200) {
        context.commit('CATEGORYLIST', result.data)
      }


    }
  },
  mutations: {
    CATEGORYLIST(state, v) {
      state.categoryList = v
    }
  },
  getters: {

  }
}