// // vue.config.ts
// module.exports = {
//     publicPath: './',
// }
// vue.config.js
// module.exports = {
//     publicPath: process.env.NODE_ENV === 'production'
//       ? '/vuebase06Project/'  // 必须与 GitHub 仓库名一致
//       : '/'
// }
// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuebase06Project/'
    : '/'
})