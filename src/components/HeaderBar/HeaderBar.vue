<template>
  <van-nav-bar
    :title="title"
    :left-arrow="leftArrow"
  >
    <van-icon :name="leftIcon" slot="left" v-if="leftIcon" size="20"/>
    <van-icon :name="rightIcon" slot="right" v-if="rightIcon" size="20"/>
  </van-nav-bar>
</template>

<script>
import { NavBar, Icon } from 'vant'
export default {
  name: 'HeaderBar',
  props: {
    title: String,
    leftArrow: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      type: String,
      default: null
    },
    rightIcon: {
      type: String,
      default: null
    }
  },
  components: {
    'van-nav-bar': NavBar,
    'van-icon': Icon
  },
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="less" scoped>
  .van-nav-bar {
    background-color: #07c160;
  }
  .van-nav-bar__title {
    color: white;
  }
  .van-icon {
    color: white;
  }
</style>
