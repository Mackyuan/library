'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  externals: {
  },
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.vue', '.json', '.png'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@canna/canna-h5/src': resolve('src/modules/canna-h5/src'),
      '@canna/plugin-canna-common/src': resolve('src/modules/canna-common/src'),
      '@canna/plugin-canna-config-center/src': resolve('src/modules/canna-config-center/src'),
      '@canna/plugin-canna-dashboard/src': resolve('src/modules/canna-dashboard/src'),
      '@canna/plugin-canna-layout/src': resolve('src/modules/canna-layout/src'),
      '@canna/plugin-canna-login/src': resolve('src/modules/canna-login/src'),
      '@canna/plugin-canna-organization/src': resolve('src/modules/canna-organization/src'),
      '@canna/plugin-canna-system/src': resolve('src/modules/canna-system/src'),
      '@canna/plugin-table-info/src': resolve('src/modules/table-info/src'),
      '@canna/plugin-asset-info/src': resolve('src/modules/asset-info/src'),
      '@canna/plugin-travel/src': resolve('src/modules/travel/src'),
      '@canna/plugin-canna-visual-login/src': resolve('src/modules/canna-visual-login/src'),
      '@canna/plugin-travel-manager/src': resolve('src/modules/travel-manager/src'),
      '@canna/plugin-canna-sms/src': resolve('src/modules/canna-sms/src'),
      '@canna/plugin-younger-manager/src': resolve('src/modules/younger-manager/src'),
      '@canna/plugin-exam-manager/src': resolve('src/modules/exam-manager/src'),
      '@canna/plugin-exam-member-web/src': resolve('src/modules/exam-member-web/src'),
      '@canna/plugin-urgent-organization/src': resolve('src/modules/urgent-organization/src'),
      '@canna/plugin-app-manager/src': resolve('src/modules/app-manager/src')
    }
  }
}
