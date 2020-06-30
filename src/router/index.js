Vue.use(VueRouter)
import Layout from '@canna/plugin-canna-layout/src/views/layout/index'

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
import baseRouter from '@canna/canna-h5/src/views/canna-base/router/canna-base'
import indexRouter from '@canna/canna-h5/src/views/canna-base/router/canna-index'
import extendRouterCreate from '@canna/canna-h5/src/views/canna-base/router/canna-extend'
import loginRouter from '@canna/plugin-canna-login/src/router/canna-login'
import dashboardRouterCreate from '@canna/plugin-canna-dashboard/src/router/canna-dashboard'
import configCenterCreate from '@canna/plugin-canna-config-center/src/router/canna-config-center'
import orgRouterCreate from '@canna/plugin-canna-organization/src/router/canna-organization'
import systemRouterCreate from '@canna/plugin-canna-system/src/router/canna-system'
import commonRouterCreate from '@canna/plugin-canna-common/src/router/canna-common'
import smsRouterCreate from '@canna/plugin-canna-sms/src/router/sms-info'
import appManagerRouterCreate from '@canna/plugin-app-manager/src/router/index'

const configCenterRouter = configCenterCreate(Layout)
const dashboardRouter = dashboardRouterCreate(Layout)
const extendRouter = extendRouterCreate(Layout)
const orgRouter = orgRouterCreate(Layout)
const systemRouter = systemRouterCreate(Layout)
const commonRouter = commonRouterCreate(Layout)
const smsRouter = smsRouterCreate(Layout)
const appManagerRouter = appManagerRouterCreate(Layout)

var moduleRoutes = []
var cloudRouters = baseRouter.concat(extendRouter).concat(loginRouter).concat(dashboardRouter).concat(configCenterRouter).concat(orgRouter).concat(systemRouter).concat(commonRouter).concat(smsRouter).concat(appManagerRouter)
var moduleRoute = {
  'canna-base': cloudRouters,
  'canna-index': indexRouter
}
moduleRoutes.push(...cloudRouters)
moduleRoutes.push(...indexRouter)
/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

export const totalRoutes = [
  ...moduleRoutes
]

console.log('totalRoutes', totalRoutes)

const createRouter = () => new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: totalRoutes,
  base: process.env.VUE_APP_GLOBAL_ROUTER_BASE,
  mode: 'history'
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export const moduleRouteMap = moduleRoute
export default router
