import Vue from "vue";
import router from 'vue-router'
import Home from '../pages/Home'
import Search from '../pages/Search'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Detail from '../pages/Detail'

let originPush = router.prototype.push
router.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })

  }
}
export default new router({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        isShow: true
      },
      children: [
        {
          path: 'detail',
          component: Detail,
          meta: {
            isAuth: true
          }
        },
      ]
    },
    {
      path: '/search',
      component: Search,
      meta: {
        isShow: true
      },
      props($route) {
        return {
          keyWord: $route.query.keyWord,
          categoryName: $route.query.categoryName,
          category1id: $route.query.category1id,
          category2id: $route.query.category2id,
          category3id: $route.query.category3id


        }
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '*',
      redirect: '/Home'
    }
  ]
})
Vue.use(router)