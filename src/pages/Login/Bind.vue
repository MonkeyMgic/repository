<template>
  <!--on表示显示，off表示关闭-->
  <div class="off">
    <section class="loginContainer">
      <div class="loginInner">
        <div class="login_header">
          <h2 class="login_logo">花椒小铺</h2>
          <div class="login_header_title">
          </div>
        </div>
        <div class="login_content">
          <form @submit.prevent="login">
            <div class="on">
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
                <button :disabled="!rightPhone" class="get_verification"
                        :class="{right_phone: rightPhone}" @click.prevent="getCode">
                  {{ computeTime > 0 ? `已发送(${computeTime}s)` : '获取验证码' }}
                </button>
              </section>
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="验证码" v-model="code">
              </section>
              <section class="login_hint">
                温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              </section>
            </div>
            <button class="login_submit">登录</button>
          </form>
        </div>
        <a href="javascript:" class="go_back" @click="$router.back()">
          <i class="iconfont icon-icon_arrowleft"></i>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
// import { reqPwdLogin } from '../../api'
import { bindUser } from '../../api/login'
import { Dialog } from 'vant'

export default {
  name: 'Login',
  props: {
    title: String
  },
  data () {
    return {
      phone: '',
      computeTime: 0,
      showPwd: false,
      pwd: '',
      code: '',
      name: '',
      captcha: ''
    }
  },
  computed: {
    rightPhone () {
      return /^1\d{10}$/.test(this.phone)
    }
  },
  methods: {
    getCode () {
      if (!this.computeTime) {
        // 启动倒计时
        this.computeTime = 30
        const intervalId = setInterval(() => {
          this.computeTime--
          if (this.computeTime <= 0) {
            clearInterval(intervalId)
          }
        }, 1000)

        // 发送验证码请求
      }
    },
    async login () {
      // let result
      // 前台表单验证
      const {rightPhone, code} = this
      if (!rightPhone) {
        // 手机号不正确
        Dialog({ message: '手机号不正确' })
        return false
      } else if (!/^\d{6}$/.test(code)) {
        // 验证码必须是6位数字
        Dialog({ message: '验证码必须是6位数字' })
        return false
      }
      // result = await reqPwdLogin({name, pwd, captcha})
      // result = await login({name, pwd})
      bindUser(this.phone, '1234').then(response => {
        if (response.code === 200) {
        }
      })
      // if (result.code === 0) {
      //   const user = result.data
      //   // 将user保存到vuex
      //   this.$store.dispatch('recordUser', user)
      //   // 跳转到个人中心
      //   this.$router.replace('/profile')
      // } else {
      //   Dialog({ message: result.msg })
      // }
    },
    getCaptcha (event) {
      event.target.src = 'http://localhost:4000/captcha?time=' + Date.now()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align centerhu
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone
                  color black
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.right
                    transform  translateX(30px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
</style>
