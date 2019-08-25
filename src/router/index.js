import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
// import MSite from '../pages/MSite/MSite'
// import Search from '../pages/Search/Search'
// import Order from '../pages/Order/Order'
// import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'

const MSite = () => import('../pages/MSite/MSite')
const Search = () => import('../pages/Search/Search')
const Order = () => import('../pages/Order/Order')
const Profile = () => import('../pages/Profile/Profile')
const Bind = () => import('../pages/Login/Bind')
// const Login = () => import('../pages/Login/Login')
// const Shop = () => import('../pages/Shop/Shop')
// const ShopGoods = () => import('../pages/Shop/ShopGoods/ShopGoods')
// const ShopRatings = () => import('../pages/Shop/ShopRatings/ShopRatings')
// const ShopInfo = () => import('../pages/Shop/ShopInfo/ShopInfo')
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/bind',
      component: Bind
    },
    {
      path: '/settle/list',
      component: () => import('../pages/Settle/List'),
      meta: {
        isAuth: false
      }
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/',
          redirect: '/shop/goods'
        },
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  let isOauth = sessionStorage.getItem('isOauth')
  isOauth = true
  if (isOauth) {
    const userInfo = sessionStorage.getItem('userInfo')
    const meta = to.meta || {}
    if (!userInfo) {
      store.dispatch('getUserInfo')
    }
    if (to.query.returnUrl === '/msite') {
      next({
        path: to.query.returnUrl
      })
    }
    if (!meta.isAuth || !userInfo) {
      next()
    }
  } else {
    sessionStorage.setItem('isOauth', true)
    const baseUrl = 'http://localhost:8080'
    const msite = '/msite'
    window.location.href = `http://118.31.53.93/weixin/oauth?returnUrl=${baseUrl}/%23${msite}`
    // &bindUserUrl=${baseUrl}/%23/bind
  }
  next()
})

export default router
