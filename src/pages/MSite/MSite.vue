<template>
  <div>
    <!--首页头部-->
    <HeaderBar :title="'商铺列表'" :leftIcon="'search'">
<!--      <van-icon name="search" slot="right" />-->
<!--      <router-link class="header_login" slot="right" :to="userInfo._id ? '/userInfo' : '/bind'">-->
<!--        <span class="header_login_text">-->
<!--          <i class="iconfont icon-dengluren" v-if="userInfo.username">{{ userInfo.username }}</i>-->
<!--          <span v-else>登录/注册</span>-->
<!--        </span>-->
<!--      </router-link>-->
    </HeaderBar>
    <ShopList/>
  </div>
</template>

<script>
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import ShopList from '../../components/ShopList/ShopList'
import { mapState } from 'vuex'
import { Icon } from 'vant'

export default {
  name: 'MSite',
  props: {
    title: String
  },
  components: {
    HeaderBar,
    ShopList,
    'van-icon': Icon
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['address', 'userInfo'])
  },
  watch: {
  },
  mounted () {
    // this.$store.dispatch('getCategorys')
    // this.$store.dispatch('getShops')
    this.$store.dispatch('getShopsForServer')
  }
}
</script>

<style lang="less" scoped>
</style>
