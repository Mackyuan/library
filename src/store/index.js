import getters from '@canna/canna-h5/src/store/getters'
import cannaModules from '@canna/canna-h5/src/store/module-load'
import loginModules from '@canna/plugin-canna-login/src/store/modules.js'
import layoutModules from '@canna/plugin-canna-layout/src/store/module-load'
import configCenterModules from '@canna/plugin-canna-config-center/src/store/module-load'
import organizationModules from '@canna/plugin-canna-organization/src/store/module-load'
import systemModules from '@canna/plugin-canna-system/src/store/module-load'
import commonModules from '@canna/plugin-canna-common/src/store/module-load'
import tableModules from '@canna/plugin-table-info/src/store/module-load'
import smsModules from '@canna/plugin-canna-sms/src/store/module-load'

import appManagerModules from '@canna/plugin-app-manager/src/store/module-load'

Vue.use(Vuex)

var modules = Object.assign({}, cannaModules, loginModules, layoutModules, configCenterModules, organizationModules, systemModules, commonModules, tableModules, smsModules, appManagerModules)

const store = new Vuex.Store({
  modules,
  getters
})

export default store
