<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.isShow"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
import { mapActions } from 'vuex';
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  methods: {
    ...mapActions('home', { acategoryList: 'categoryList' }),
  },
  mounted() {
    this.acategoryList()
  }
}
</script>

<style></style>
