let BASE_URL = ''
// 各位同学，
// Vue3+TypeScript后台管理系统的接口已经改变，使用了新的服务器地址。
// 新的baseURL接口地址：123.207.32.32:5000或者codercba.com:5000

if (import.meta.env.PROD) {
  // 生产环境
  BASE_URL = 'https://codercba.com:5000'
} else {
  // 开发环境
  BASE_URL = 'https://123.207.32.32:5000'
}

const TIME_OUT = 10000;

export {
  BASE_URL,
  TIME_OUT
}