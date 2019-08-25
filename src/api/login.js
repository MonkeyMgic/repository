import ajax from './ajax'
const BASE_URL = '/api'
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
// export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// [2、获取食品分类列表](#2获取食品分类列表)<br/>
// export const reqFoodTypes = () => ajax('/index_category')
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const register = (username, password) => ajax(BASE_URL + '/user/register', {username, password}, 'POST')
export const login = (username, password) => ajax(BASE_URL + '/login', {username, password}, 'POST')
export const logout = () => ajax(BASE_URL + '/logout', {}, 'POST')
export const getOpenId = () => ajax(BASE_URL + '/test/test?www.baidu.com', {}, 'GET')
export const getUserInfo = () => ajax(BASE_URL + '/user/get_user_info', {}, 'GET')
export const bindUser = (username, password) => ajax(BASE_URL + '/weixin/bind_user', {username, password}, 'POST')
