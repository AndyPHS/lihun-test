/**
 * api接口统一管理
 */

// import { get, post } from './http'
// http://www.baiodu.com/api/v1/users/my_address/address_edit_before
// 环境配置
var environment = {
  onLine: "http://office365.aladdinlaw.com:3921/api/",
  // dev:"测试环境地址",
  dev: '/',
  devOfflin:"http://192.168.1.242/h5"
}
// 接口前缀
var host = location.host,
  baseHost = '',
  baseURL = '',
  baseLiHunURL = '',
  adminBaseURL, compBaseURL

if(host.indexOf('jiawen.jialilawyer.com') > -1){
  //线上环境
  baseHost = environment.onLine
}else {
  //测试环境
  baseHost = environment.dev
}
baseURL = baseHost + 'jiali_api/v1/'
baseLiHunURL = baseHost + 'Questionnaire/v1/'
//接口集合
const apiUrl = {
  // 登录
  login: baseURL + 'login/login',
  // 登录验证
  loginCode: baseURL + 'login/login_code'
}
export{
  apiUrl
}
