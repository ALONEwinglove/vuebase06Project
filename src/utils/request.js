/*设置和封装了基于axios库的HTTP请求 */
import axios from "axios";
import router from "@/router";
import { useUserStore } from "@/stores";
import { ElMessage } from "element-plus";

const BASE_URL = "http://big-event-vue-api-t.itheima.net"

// 一、创建axios实例--基本请求配置config
// 1、基准地址
//2、超时时间
const instance = axios.create({
    // axios实例默认地址
    baseURL: BASE_URL,
    // axios实例默认超时时间
    timeout: 10000
})

// 3、请求拦截器
instance.interceptors.request.use(
    (config) => {
        // 携带token
        const userStore = useUserStore()
        if (userStore.token) {
            config.headers.Authorization = userStore.token
        }
        return config
    },
    (err) => Promise.reject(err)
)
// 4、响应拦截器
instance.interceptors.response.use(
    (res) => {
        // 请求成功与否
        if(res.data.code===0) {
            return res
        }
        // 失败处理
        ElMessage.error('响应拦截器')
        ElMessage.error(res.data.message || '服务异常')
        return Promise.reject(res.data)
    },
    (err) => {
        // 处理错误特殊情况
        // 401 -> 权限不足 或 token过期
        if (err.response?.status === 401) {
            router.push('/login')
        }
        // 处理一般错误情况
        ElMessage.error('响应拦截器')
        ElMessage.error(err.response.data.message || '服务异常')
        return Promise.reject(err)
    }
)
// 导出
export default instance
export {BASE_URL}