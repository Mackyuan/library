const CannaSettings = require('@canna/canna-h5/src/settings')
const LayoutSettings = require('@canna/plugin-canna-layout/src/settings')
const CannaLoginSettings = require('@canna/plugin-canna-login/src/settings')
const CannaOrganizationSettings = require('@canna/plugin-canna-organization/src/settings')
const CannaSystemSettings = require('@canna/plugin-canna-system/src/settings')
const CannaCommonSettings = require('@canna/plugin-canna-common/src/settings')
const CannaAssetSettings = require('@canna/plugin-asset-info/src/settings')
const CannaTravelManagerSettings = require('@canna/plugin-travel-manager/src/settings')
const CannaSmsSettings = require('@canna/plugin-canna-sms/src/settings')
const CannaYoungerManagerSettings = require('@canna/plugin-younger-manager/src/settings')
const ExamManagerSettings = require('@canna/plugin-exam-manager/src/settings')
const ExamMemberWebSettings = require('@canna/plugin-exam-member-web/src/settings')
const UrgentOrganizationSettings = require('@canna/plugin-urgent-organization/src/settings')
const AppManagerSettings = require('@canna/plugin-app-manager/src/settings')
module.exports = {
  ...CannaSettings,
  ...LayoutSettings,
  ...CannaLoginSettings,
  ...CannaOrganizationSettings,
  ...CannaSystemSettings,
  ...CannaCommonSettings,
  ...CannaAssetSettings,
  ...CannaTravelManagerSettings,
  ...CannaSmsSettings,
  ...CannaYoungerManagerSettings,
  ...ExamManagerSettings,
  ...ExamMemberWebSettings,
  ...UrgentOrganizationSettings,
  ...AppManagerSettings
}
