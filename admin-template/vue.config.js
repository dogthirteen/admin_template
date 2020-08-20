const Timestamp = new Date().getTime(); //当前时间为了防止打包缓存不刷新，所以给每个js文件都加一个时间戳
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}


module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    port: '8080',
    host: "192.168.2.147",
    // host: "localhost",
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000', //node.js服务器运行的地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': 'http://localhost:3000' //路径重写 
        }
      },
    }
  },
  css: {
    // 设置主题css为全局变量
    loaderOptions: {
      sass: {
        prependData: `@import '@/styles/theme.scss';`
      }
    }
  },
  configureWebpack: {
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
      chunkFilename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`
    },
  },

  chainWebpack(config) {
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons/svg")) // icons存放地（svg放的地方）
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons/svg")) // icons存放地（svg放的地方）
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();
  },

}