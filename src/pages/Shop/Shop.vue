<template>
  <div>
    <ShopHeader :shop-info="shopInfo"></ShopHeader>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/goods" replace>点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info" replace>商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import ShopHeader from '../../components/ShopHeader/ShopHeader'
import { getShopDetail } from '../../api/shop'
export default {
  name: 'Shop',
  components: {
    ShopHeader
  },
  mounted () {
    this.$store.dispatch('getShopInfo')
    getShopDetail(this.shopId).then(response => {
      if (response && response.code === 200) {
        const result = response.data
        const { id, name, rating } = result
        this.shopInfo = { id, name, rating }
        this.shopDetail = result
      }
    }).catch(
    )
  },
  data () {
    return {
      shopId: this.$route.query.shopId,
      shopDetail: null,
      shopInfo: {}
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width: 50%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #02a774
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #02a774
</style>
