import {apiUrl} from '@/common/js/api.js'
import axios from 'axios'
import qs from 'qs'


// 验证码接口
export const verifyCode = params => {
  return axios({
    method: "GET",
    dataType: 'json',
    url: apiUrl.loginCode,
    data: qs.stringify(params)
  });
};