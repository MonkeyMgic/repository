<template>
  <div>
    <Popup v-model="showPop" position="bottom" style="height: 40%"
           @open="openPop">
      <van-datetime-picker
        v-model="currentTime"
        type="time"
        :min-hour="minHour"
        :min-minute="minMinute"
        :max-hour="maxHour"
        @confirm="onSelect"
        @cancel="this.showPop=false"
        @change="onChange"
      />
    </Popup>
  </div>
</template>

<script>
import { Popup, DatetimePicker } from 'vant'
import { getHour, getMinute, addMinute } from '../../utils/date'
export default {
  name: 'DeliveryTime',
  components: {
    'van-datetime-picker': DatetimePicker,
    Popup
  },
  data () {
    return {
      showPop: false,
      currentTime: '00:00',
      minHour: 0,
      minMinute: 0,
      maxHour: 24,
      minute: 0
    }
  },
  methods: {
    onShow () {
      this.showPop = true
    },
    openPop () {
      const date = addMinute(new Date(), 60)
      const hour = getHour(date)
      const minute = getMinute(date)
      this.minHour = hour
      this.minMinute = minute
      this.minute = minute
      this.currentTime = hour + ':' + minute
    },
    onSelect (item) {
      this.$emit('selectTime', item)
      this.showPop = false
    },
    onChange (picker) {
      const hour = picker.getValues()[0]
      if (hour === this.minHour.toString()) {
        this.minMinute = this.minute
      } else {
        this.minMinute = 0
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
