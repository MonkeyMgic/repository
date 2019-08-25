<template>
  <div>
    <Popup v-model="showPop" position="bottom" style="height: 90%">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        disabled-text="当前商店只配送到华东交通大学内"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"
      />
    </Popup>
    <Popup v-model="showEditPop" position="bottom" style="height: 100%"
           @open="onEditOpen" @closed="onEditClose">
      <van-address-edit
        show-delete
        :area-list="areaList"
        show-set-default
        :addressInfo="AddressInfo"
        @save="onSave"
        @delete="onDelete"
        ref="addressEdit"
      />
    </Popup>
  </div>
</template>

<script>
import { Popup, AddressList, AddressEdit } from 'vant'
import area from '../../assets/data/area'
export default {
  name: 'AddressList',
  components: {
    'van-address-list': AddressList,
    'van-address-edit': AddressEdit,
    Popup
  },
  data () {
    return {
      showPop: false,
      showEditPop: false,
      searchResult: [],
      chosenAddressId: '1',
      areaList: area,
      AddressInfo: { areaCode: '110101' },
      backAddressInfo: { areaCode: '110101' },
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ]
    }
  },
  methods: {
    onAdd () {
      this.showEditPop = true
    },
    onEdit (item, index) {
      alert('编辑地址:' + index)
    },
    onShow () {
      this.showPop = true
    },
    onSelect () {
      this.showPop = false
    },
    onSave (item) {
      alert('save')
      this.showEditPop = false
    },
    onDelete () {
      alert('delete')
      this.showEditPop = false
      // this.$refs.addressEdit.getElementsByClassName('van-cell')
    },
    onEditOpen () {
    },
    onEditClose () {
      this.AddressInfo = Object.assign({}, this.backAddressInfo)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .van-address-edit
    .van-cell:nth-child(3)
      /*display none*/
</style>
