<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommand></Recommand>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommand from './Recommand'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import { mapState, mapActions } from 'vuex'
import user from '@/store/user'
export default {
  name: '',
  components: {
    ListContainer,
    Recommand,
    Rank,
    Like,
    Floor,
    Brand
  },
  computed: {
    ...mapState(['num'])
  },
  methods: {
    ...mapActions('user', {
      disUserI:'userI'
    })
  },
  mounted() {
    this.disUserI()
  },
}
</script>

<style></style>