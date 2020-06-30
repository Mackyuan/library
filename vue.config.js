'use strict'
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const name = '睿维云平台' // page title
// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
const port = 9527 // dev port
const PUBLIC_PATH = process.env.VUE_APP_GLOBAL_PUBLIC_PATH
// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: PUBLIC_PATH,
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    // open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: `http://127.0.0.1:${port}/mock`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  configureWebpack: config => {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    let plugins = [
    ]
    if (process.env.NODE_ENV !== 'development') {
      var terserPlugin = new TerserPlugin({
        warningsFilter: (warning, source) => {
          return false
        },
        extractComments: true,
        sourceMap: false,
        parallel: true
      })
      plugins.push(terserPlugin)
    }
    if (process.env.NODE_ENV !== 'development') {
      var plugin = new CompressionPlugin({
        test: /\.js$|\.html$|\.png$|\.jpg$|\.svg$|\.css/, // 匹配文件名
        threshold: 10240, // 对超过10k的数据压缩
        minRatio: 0.8,
        deleteOriginalAssets: false // 不删除源文件
      })
      plugins.push(plugin)
    }
    return {
      name: name,
      plugins: plugins,
      externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vue-i18n': 'VueI18n',
        'sortablejs': 'Sortable',
        'vuex': 'Vuex',
        'echarts': 'echarts',
        'fuse.js': 'Fuse',
        'axios': 'axios',
        'qs': 'Qs',
        'element-ui': 'ELEMENT',
        'Cookies': 'Cookies',
        'Stomp': 'Stomp',
        'SockJS': 'SockJS',
        'DecoupledEditor': 'DecoupledEditor',
        'vue-qr': 'VueQr'
      }
    }
  },
  chainWebpack(config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons')).add(resolve('src/modules/canna-h5/src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons')).add(resolve('src/modules/canna-h5/src/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )

    config
      .when(process.env.VUE_APP_GLOBAL_ANALYZER === 'analyzer',
        config => {
          config.plugin('webpack-bundle-analyzer')
            .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        })

    config.resolve.alias
      .set('@', resolve('src'))
      .set('@canna/canna-h5/src', resolve('src/modules/canna-h5/src'))
      .set('@canna/plugin-canna-common/src', resolve('src/modules/canna-common/src'))
      .set('@canna/plugin-canna-config-center/src', resolve('src/modules/canna-config-center/src'))
      .set('@canna/plugin-canna-dashboard/src', resolve('src/modules/canna-dashboard/src'))
      .set('@canna/plugin-canna-layout/src', resolve('src/modules/canna-layout/src'))
      .set('@canna/plugin-canna-login/src', resolve('src/modules/canna-login/src'))
      .set('@canna/plugin-canna-visual-login/src', resolve('src/modules/canna-visual-login/src'))
      .set('@canna/plugin-canna-organization/src', resolve('src/modules/canna-organization/src'))
      .set('@canna/plugin-canna-system/src', resolve('src/modules/canna-system/src'))
      .set('@canna/plugin-table-info/src', resolve('src/modules/table-info/src'))
      .set('@canna/plugin-asset-info/src', resolve('src/modules/asset-info/src'))
      .set('@canna/plugin-travel/src', resolve('src/modules/travel-h5/src'))
      .set('@canna/plugin-travel-manager/src', resolve('src/modules/travel-manager/src'))
      .set('@canna/plugin-canna-sms/src', resolve('src/modules/canna-sms/src'))
      .set('@canna/plugin-younger-manager/src', resolve('src/modules/younger-manager/src'))
      .set('@canna/plugin-exam-manager/src', resolve('src/modules/exam-manager/src'))
      .set('@canna/plugin-exam-member-web/src', resolve('src/modules/exam-member-web/src'))
      .set('@canna/plugin-urgent-organization/src', resolve('src/modules/urgent-organization/src'))
      .set('@canna/plugin-app-manager/src', resolve('src/modules/app-manager/src'))

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
            // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
  }
}
