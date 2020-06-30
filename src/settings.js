const CannaSettings = require('@canna/canna-h5/src/settings')
const LayoutSettings = require('@canna/plugin-canna-layout/src/settings')
const CannaLoginSettings = require('@canna/plugin-canna-login/src/settings')
const CannaOrganizationSettings = require('@canna/plugin-canna-organization/src/settings')
const CannaSystemSettings = require('@canna/plugin-canna-system/src/settings')
const CannaCommonSettings = require('@canna/plugin-canna-common/src/settings')
const CannaSmsSettings = require('@canna/plugin-canna-sms/src/settings')
const AppManagerSettings = require('@canna/plugin-app-manager/src/settings')
module.exports = {
  ...CannaSettings,
  ...LayoutSettings,
  ...CannaLoginSettings,
  ...CannaOrganizationSettings,
  ...CannaSystemSettings,
  ...CannaCommonSettings,
  ...CannaSmsSettings,
  ...AppManagerSettings
}
