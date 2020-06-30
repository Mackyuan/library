import getters from '@canna/canna-h5/src/store/getters'
import cannaModules from '@canna/canna-h5/src/store/module-load'
import loginModules from '@canna/plugin-canna-login/src/store/modules.js'
import layoutModules from '@canna/plugin-canna-layout/src/store/module-load'
import configCenterModules from '@canna/plugin-canna-config-center/src/store/module-load'
import organizationModules from '@canna/plugin-canna-organization/src/store/module-load'
import systemModules from '@canna/plugin-canna-system/src/store/module-load'
import commonModules from '@canna/plugin-canna-common/src/store/module-load'
import assetModules from '@canna/plugin-asset-info/src/store/module-load'
import tableModules from '@canna/plugin-table-info/src/store/module-load'
import travelManagerModules from '@canna/plugin-travel-manager/src/store/module-load'
import smsModules from '@canna/plugin-canna-sms/src/store/module-load'
import youngerManagerModules from '@canna/plugin-younger-manager/src/store/module-load'
// import examManagerModules from '@canna/plugin-exam-manager/src/store/module-load'

import examManagerModules from '@canna/plugin-exam-manager/src/store/module-load'
import examMemberWebModules from '@canna/plugin-exam-member-web/src/store/module-load'
import urgentOrganizationModules from '@canna/plugin-urgent-organization/src/store/module-load'
import appManagerModules from '@canna/plugin-app-manager/src/store/module-load'

Vue.use(Vuex)

var modules = Object.assign({}, cannaModules, loginModules, layoutModules, configCenterModules, organizationModules, systemModules, commonModules, assetModules, tableModules, travelManagerModules, smsModules, youngerManagerModules, examManagerModules, examMemberWebModules, urgentOrganizationModules, appManagerModules)

const store = new Vuex.Store({
  modules,
  getters
})

export default store
