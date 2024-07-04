import { reqGetCode, reqUserR, reqUserL, reqUserI } from '../api'

export default {
  namespaced: true,
  state: {
    code: '',
    token: sessionStorage.getItem('TOKEN'),
    userI: {}
  },
  actions: {
    async getCode(context, teleNum) {
      let result = await reqGetCode(teleNum)
      if (result.code == 200) {
        context.commit('GETCODE', result.data)
        return 'ok'
      } else {
        return Promise.reject(new Error('faile'))
      }

    },
    async userR(context, user) {
      let result = await reqUserR(user)
      if (result.code == 200) {
        return 'ok'
      } else {
        return Promise.reject(new Error('faile'))
      }
    },
    async userL(context, user) {
      let result = await reqUserL(user)
      console.log(result);
      if (result.code == 200) {
        context.commit('USERL', result.data.token)
        // localStorage.setItem('TOKEN', result.data.token)
        sessionStorage.setItem('TOKEN', result.data.token)
        return 'ok'
      } else {
        return Promise.reject(new Error('faile'))
      }
    },
    async userI(context, user) {
      let result = await reqUserI()
      console.log(result);
      if (result.code == 200) {
        context.commit('USERI', result.data)
        return 'ok'
      }
      //   return Promise.reject(new Error('faile'))
      // }

    }
  },
  mutations: {
    GETCODE(state, code) {
      state.code = code
    },
    USERL(state, token) {
      state.token = token
    },
    USERI(state, data) {
      state.userI = { name: '杨洋' }
      console.log(state.userI);
    }
  },
  getters: {

  }
}