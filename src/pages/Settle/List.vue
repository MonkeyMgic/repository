<template>
  <div>
    <HeaderTop title="确认订单"/>
    <van-cell-group class="van-contact-card">
      <van-cell v-if="userInfo.addr" title="单元格" value="内容" label="描述信息" />
      <van-cell v-else icon="location-o" title="请选择一个收货地址" is-link @click="$refs.address.onShow()"/>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="送达时间" is-link @click="$refs.deliveryTime.onShow()" v-model="deliveryTime"/>
    </van-cell-group>
    <AddressList ref="address"></AddressList>
    <DeliveryTime ref="deliveryTime" @selectTime="selectTime"></DeliveryTime>
  </div>
</template>

<script>
import { Cell, CellGroup } from 'vant'
import { mapState } from 'vuex'
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import AddressList from '../../components/AddressList/AddressList'
import DeliveryTime from '../../components/DeliveryTime/DeliveryTime'
export default {
  name: 'SettleList',
  components: {
    'van-cell': Cell,
    'van-cell-group': CellGroup,
    HeaderTop,
    AddressList,
    DeliveryTime
  },
  computed: {
    ...mapState(['userInfo'])
  },
  data () {
    return {
      deliveryTime: ''
    }
  },
  methods: {
    selectTime (item) {
      this.deliveryTime = item
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .van-contact-card
    margin-top 45px
    padding 10px
  .van-contact-card::before
    position absolute
    right 0
    bottom 0
    left 0
    height 2px
    background repeating-linear-gradient(-45deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #1989fa 0, #1989fa 45%, transparent 0, transparent 50%)
    background-size 80px
    content ' '
</style>
