<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide'
// import { reqAddress } from './api'
// import { register } from './api/login'
export default {
  name: 'App',
  components: {
    FooterGuide
  },
  mounted () {
    // const result = register('test241124', '155')
    // console.log(result)
    // const result = reqAddress('40.10038' + ',' + '116.36867')
    // console.log(result)
    // this.$store.dispatch('getAddress')
    // this.getAddress()
    // this.getUserInfo()
  },
  methods: {
    // ...mapActions(['getAddress', 'getUserInfo'])
    // ...mapActions(['getAddress', 'getUserInfo'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    color: red
</style>
