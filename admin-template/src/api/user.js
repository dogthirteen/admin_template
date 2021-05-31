import javaHttp from '@/utils/javaHttp'
import rsaEncrypt from '@/utils/encryptRsa'
// import md5Encrypt from '@/utils/encryptMd5'
import qs from 'qs'


//测试登录
export const Login = (data = {}) => {
  return javaHttp({
    url: "/login",
    method: "POST",
    data: qs.stringify(rsaEncrypt(data))
  })
}
// 测试获取路由
export const getSyncRoutes = (data = {}) => {
  return javaHttp({
    url: "/get_sync_routes",
    method: "GET",
    data: qs.stringify(rsaEncrypt(data))
  })
}