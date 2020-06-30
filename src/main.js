import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import '@canna/canna-h5/src/styles/index.scss' // global css

import store from './store'
import App from '@canna/canna-h5/src/App'
import router from './router'
import i18n from './lang' // internationalization
import './icons' // icon
import '@canna/canna-h5/src/utils/error-log' // error log
import * as filters from '@canna/canna-h5/src/filters' // global filters
// localStorage.setItem('menuList', JSON.stringify(router.options.routes)) // 加载所有路由(app使用)
import '@canna/canna-h5/src/permission' // permission control

Vue.use(ELEMENT, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
var vueElement = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  data: {
    eventHub: new Vue()
  },
  render: h => h(App)
})
window.vueElement = vueElement
