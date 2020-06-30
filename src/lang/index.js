import CannaEnUsLocale from '@canna/canna-h5/src/lang/en-us'
import CannaZhCnLocale from '@canna/canna-h5/src/lang/zh-cn'
import CannaEsLocale from '@canna/canna-h5/src/lang/es'
import CannaJaLocale from '@canna/canna-h5/src/lang/ja'

import LoginEnUsLocale from '@canna/plugin-canna-login/src/lang/en-us'
import LoginZhCnLocale from '@canna/plugin-canna-login/src/lang/zh-cn'
import LoginEsLocale from '@canna/plugin-canna-login/src/lang/es'
import LoginJaLocale from '@canna/plugin-canna-login/src/lang/ja'

import ConfigCenterEnUsLocale from '@canna/plugin-canna-config-center/src/lang/en-us'
import ConfigCenterZhCnLocale from '@canna/plugin-canna-config-center/src/lang/zh-cn'
import ConfigCenterEsLocale from '@canna/plugin-canna-config-center/src/lang/es'
import ConfigCenterJaLocale from '@canna/plugin-canna-config-center/src/lang/ja'

import OrgEnUsLocale from '@canna/plugin-canna-organization/src/lang/en-us'
import OrgZhCnLocale from '@canna/plugin-canna-organization/src/lang/zh-cn'
import OrgEsLocale from '@canna/plugin-canna-organization/src/lang/es'
import OrgJaLocale from '@canna/plugin-canna-organization/src/lang/ja'

import SystemEnUsLocale from '@canna/plugin-canna-system/src/lang/en-us'
import SystemZhCnLocale from '@canna/plugin-canna-system/src/lang/zh-cn'
import SystemEsLocale from '@canna/plugin-canna-system/src/lang/es'
import SystemJaLocale from '@canna/plugin-canna-system/src/lang/ja'

import CommonEnUsLocale from '@canna/plugin-canna-common/src/lang/en-us'
import CommonZhCnLocale from '@canna/plugin-canna-common/src/lang/zh-cn'
import CommonEsLocale from '@canna/plugin-canna-common/src/lang/es'
import CommonJaLocale from '@canna/plugin-canna-common/src/lang/ja'

import SmsEnUsLocale from '@canna/plugin-canna-sms/src/lang/en-us'
import SmsZhCnLocale from '@canna/plugin-canna-sms/src/lang/zh-cn'
import SmsEsLocale from '@canna/plugin-canna-sms/src/lang/es'
import SmsJaLocale from '@canna/plugin-canna-sms/src/lang/ja'

import AppManagerEnUsLocale from '@canna/plugin-app-manager/src/lang/en-us'
import AppManagerZhCnLocale from '@canna/plugin-app-manager/src/lang/zh-cn'
import AppManagerEsLocale from '@canna/plugin-app-manager/src/lang/es'
import AppManagerJaLocale from '@canna/plugin-app-manager/src/lang/ja'

import enUsLocale from './en-us'
import zhCnLocale from './zh-cn'
import esLocale from './es'
import jaLocale from './ja'

const elementEnLocale = ELEMENT.lang.en
const elementEsLocale = ELEMENT.lang.es
const elementJaLocale = ELEMENT.lang.ja
const elementZhCnLocale = ELEMENT.lang.zhCN

Vue.use(VueI18n)

const messages = {
  'en-us': {
    ...CannaEnUsLocale,
    ...LoginEnUsLocale,
    ...OrgEnUsLocale,
    ...SystemEnUsLocale,
    ...CommonEnUsLocale,
    ...enUsLocale,
    ...ConfigCenterEnUsLocale,
    ...elementEnLocale,
    // ...AssetEnUsLocale,
    // ...TravelManagerEnUsLocale,
    ...SmsEnUsLocale,
    // ...YoungerManagerEnUsLocale,
    // ...ExamManagerEnUsLocale,
    ...ExamMemberWebEnUsLocale,
    ...UrgentOrganizationEnUsLocale,
    ...AppManagerEnUsLocale
  },
  'zh-cn': {
    ...CannaZhCnLocale,
    ...LoginZhCnLocale,
    ...OrgZhCnLocale,
    ...SystemZhCnLocale,
    ...CommonZhCnLocale,
    ...zhCnLocale,
    ...ConfigCenterZhCnLocale,
    ...elementZhCnLocale,
    // ...AssetZhCnLocale,
    // ...TravelManagerZhCnLocale,
    ...SmsZhCnLocale,
    // ...YoungerManagerZhCnLocale,
    ...ExamMemberWebZhCnLocale,
    ...UrgentOrganizationZhCnLocale,
    ...AppManagerZhCnLocale
  },
  es: {
    ...CannaEsLocale,
    ...LoginEsLocale,
    ...OrgEsLocale,
    ...SystemEsLocale,
    ...CommonEsLocale,
    ...esLocale,
    ...ConfigCenterEsLocale,
    ...elementEsLocale,
    // ...AssetEsLocale,/
    // ...TravelManagerEsLocale,
    ...SmsEsLocale,
    // ...YoungerManagerEsLocale,
    ...ExamMemberWebEsLocale,
    ...UrgentOrganizationEsLocale,
    ...AppManagerEsLocale
  },
  ja: {
    ...CannaJaLocale,
    ...LoginJaLocale,
    ...OrgJaLocale,
    ...SystemJaLocale,
    ...CommonJaLocale,
    ...jaLocale,
    ...ConfigCenterJaLocale,
    ...elementJaLocale,
    // ...AssetJaLocale,
    // ...TravelManagerJaLocale,
    ...SmsJaLocale,
    // ...YoungerManagerJaLocale,
    ...ExamMemberWebJaLocale,
    ...UrgentOrganizationJaLocale,
    ...AppManagerJaLocale
  }
}
export function getLanguage () {
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) return chooseLanguage

  // if has not choose language
  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'zh-cn'
}
const i18n = new VueI18n({
  locale: getLanguage(),
  messages
})

export default i18n
