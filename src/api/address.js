import ajax from './ajax'
const BASE_URL = '/api'
export const register = (username, password) => ajax(BASE_URL + '/user/register', {username, password}, 'POST')
export const login = (username, password) => ajax(BASE_URL + '/login', {username, password}, 'POST')
export const logout = () => ajax(BASE_URL + '/logout', {}, 'POST')
export const getOpenId = () => ajax(BASE_URL + '/test/test?www.baidu.com', {}, 'GET')
export const getUserInfo = () => ajax(BASE_URL + '/user/get_user_info', {}, 'GET')
export const bindUser = (username, password) => ajax(BASE_URL + '/weixin/bind_user', {username, password}, 'POST')
