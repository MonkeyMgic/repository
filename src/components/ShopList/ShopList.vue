<template>
  <div>
    <div v-if="shops.length">
      <div v-for="(shop, index) in shops" :key="index">
        <div class="shop-card" @click="$router.push({ path: '/shop', query: { shopId: shop.id }})">
          <div class="shop_left">
            <img class="shop_img" :src="shop.imageUrl">
          </div>
          <div class="shop_right">
            <div class="shop_title">{{ shop.name }}</div>
            <div class="shop_rating_order">
              <van-rate :value="shop.rating" size="15" readonly></van-rate>
              <div class="order_section">
                月销量{{ shop.recent_order_num }}
              </div>
            </div>
            <div class="shop_distance">
              <div>
                <span>¥{{ shop.float_minimum_order_amount }}起送</span>
                <span>/</span>
                <span>配送费¥{{ shop.float_delivery_fee }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { Rate } from 'vant'
export default {
  name: 'ShopList',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['shops'])
  },
  components: {
    'van-rate': Rate
  }
}
</script>

<style lang="less" scoped>
  .shop_distance {
    font-size: 12px;
  }
  .order_section {
    font-size: 12px;
    color: #666;
    line-height: initial;
    margin-left: 10px;
  }
  .shop_rating_order {
    width: 100%;
    margin-top: 12px;
    margin-bottom: 12px;
    display: flex;
  }
  .shop_title {
    color: #333;
    font-size: 16px;
    font-weight: 700;
  }
   .shop_right {
     width: 77%;
   }
   .shop_left {
     box-sizing: border-box;
     width: 23%;
     height: 75px;
     padding-right: 10px;
     .shop_img {
       display: block;
       width: 100%;
       height: 100%;
     }
   }
   .shop-card {
     display: flex;
     box-sizing: border-box;
     padding: 15px 8px;
     width: 100%;
     border-bottom: 1px solid darkgray;
   }
</style>
