# canna-demo

> canna前端系统样例

## Code Standard
```
查看wiki：http://develop.roywise.cn:31080/confluence/pages/viewpage.action?pageId=10485774
```

## start use
```
# install by private storage
npm install --registry https://npm.roywise.cn --unsafe-perm -f

# install canna-h5
npm --registry https://npm.roywise.cn install @canna/canna-h5
npm --registry https://npm.roywise.cn install @canna/plugin-canna-login 
npm --registry https://npm.roywise.cn install @canna/plugin-canna-dashboard 
npm --registry https://npm.roywise.cn install @canna/plugin-canna-layout 
npm --registry https://npm.roywise.cn install @canna/plugin-table-info 
npm --registry https://npm.roywise.cn install @canna/plugin-canna-config-center
npm --registry https://npm.roywise.cn install @canna/plugin-canna-organization
npm --registry https://npm.roywise.cn install @canna/plugin-canna-system 
npm --registry https://npm.roywise.cn install @canna/plugin-canna-common 
npm --registry https://npm.roywise.cn install @canna/plugin-asset-info 
npm --registry https://npm.roywise.cn install @canna/plugin-younger-manager
npm --registry https://npm.roywise.cn install @canna/plugin-exam-manager
npm --registry https://npm.roywise.cn install @canna/plugin-exam-member-web
npm --registry https://npm.roywise.cn install @canna/plugin-urgent-organization
npm --registry https://npm.roywise.cn install @canna/plugin-app-manager

# update canna-h5
npm --registry https://npm.roywise.cn update @canna/canna-h5
npm --registry https://npm.roywise.cn update @canna/plugin-canna-login 
npm --registry https://npm.roywise.cn update @canna/plugin-canna-dashboard 
npm --registry https://npm.roywise.cn update @canna/plugin-canna-layout 
npm --registry https://npm.roywise.cn update @canna/plugin-table-info 
npm --registry https://npm.roywise.cn update @canna/plugin-canna-config-center
npm --registry https://npm.roywise.cn update @canna/plugin-canna-organization
npm --registry https://npm.roywise.cn update @canna/plugin-canna-system
npm --registry https://npm.roywise.cn update @canna/plugin-canna-common 
npm --registry https://npm.roywise.cn update @canna/plugin-asset-info 
npm --registry https://npm.roywise.cn update @canna/plugin-younger-manager
npm --registry https://npm.roywise.cn update @canna/plugin-exam-manager
npm --registry https://npm.roywise.cn update @canna/plugin-exam-member-web
npm --registry https://npm.roywise.cn update @canna/plugin-urgent-organization
npm --registry https://npm.roywise.cn update @canna/plugin-app-manager

# remove euler
npm remove @canna/canna-h5

# publish
npm publish --registry https://npm.roywise.cn

```

```
构建方法
cd src/modules
git clone http://120.78.61.232:32080/canna-web/canna-h5-framework.git
git clone http://120.78.61.232:32080/plugins-web/canna-common.git
git clone http://120.78.61.232:32080/plugins-web/canna-config-center.git
git clone http://120.78.61.232:32080/plugins-web/canna-dashboard.git
git clone http://120.78.61.232:32080/plugins-web/canna-layout.git
git clone http://120.78.61.232:32080/plugins-web/canna-login.git
git clone http://120.78.61.232:32080/plugins-web/canna-organization.git
git clone http://120.78.61.232:32080/plugins-web/canna-system.git
git clone http://120.78.61.232:32080/plugins-web/table-info.git
git clone http://120.78.61.232:32080/plugins-web/travel-manager.git
git clone http://120.78.61.232:32080/plugins-web/younger-manager.git
git clone http://120.78.61.232:32080/plugins-web/asset-info.git
git clone http://120.78.61.232:32080/plugins-web/canna-sms.git
git clone http://120.78.61.232:32080/plugins-web/exam-manager.git
git clone http://120.78.61.232:32080/plugins-web/exam-member-web.git
git clone http://120.78.61.232:32080/plugins-web/urgent-organization.git
git clone http://120.78.61.232:32080/plugins-web/app-manager.git

cd canna-h5
git pull
git checkout remotes/origin/feature-200325 -b feature-200325

cd ../asset-info
git pull
git checkout remotes/origin/feature-200325 -b feature-200325

cd ../canna-common
git pull
git checkout remotes/origin/feature-200325 -b feature-200325

cd ../canna-config-center
git pull
git checkout remotes/origin/feature-200325 -b feature-200325

cd ../canna-dashboard
git pull
git checkout remotes/origin/feature-200325 -b feature-200325

cd ../canna-layout
git pull
git checkout remotes/origin/feature-200325 -b feature-200325

cd ../canna-login
git pull
git checkout remotes/origin/feature-200325 -b feature-200325

cd ../canna-organization
git pull
git checkout remotes/origin/feature-200325 -b feature-200325

cd ../canna-system
git pull
git checkout remotes/origin/feature-200325 -b feature-200325

cd ../table-info
git pull
git checkout remotes/origin/feature-200325 -b feature-200325

cd ../canna-sms
git pull
git checkout remotes/origin/feature-200325 -b feature-200325

cd ../asset-info
git pull
git checkout remotes/origin/feature-200325 -b feature-200325

cd ../travel-info
git pull
git checkout remotes/origin/feature-200325 -b feature-200325

cd ../younger-manager
git pull
git checkout remotes/origin/feature-200325 -b feature-200325

```

## Project setup
```
cnpm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build:prod
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```


# TableSort(表格表头排序名称)
# asset-info
AssetInfo_AssetStat_Index_TableSort
AssetInfo_AssetType_Index_TableSort
AssetInfo_SettledCompany_Index_TableSort
AssetInfo_LandParent_Index_TableSort
AssetInfo_LandChildren_Index_TableSort
AssetInfo_BuildingManage_Index_TableSort
AssetInfo_BuildProperty_Index_TableSort
AssetInfo_UnHand_Index_TableSort
AssetInfo_WaitHand_Index_TableSort
AssetInfo_WaitAccept_Index_TableSort
AssetInfo_HandFinish_Index_TableSort
AssetInfo_SimpleLandInfo_Index_TableSort
AssetInfo_SimpleBuildInfo_Index_TableSort
AssetInfo_SimpleBuildFloor_Index_TableSort
AssetInfo_SimpleBuildRoom_Index_TableSort
AssetInfo_MaterialAddress_Index_TableSort

# canna-common
CannaCommon_CommonOrg_OrgMember_TableSort
CannaCommon_CommonOrg_SelectMember_TableSort
CannaCommon_CompanyInfo_TableSort
CannaCommon_MemberPower_MemberInfo_TableSort
CannaCommon_MemberPower_ModuleInfo_TableSort
CannaCommon_MemberPower_PowerGroup_TableSort
CannaCommon_MemberPower_SelectRole_TableSort
CannaCommon_ModuleRole_MemberInfo_TableSort
CannaCommon_ModuleRole_PowerGroup_TableSort
CannaCommon_ModuleRole_SelectRole_TableSort
CannaCommon_OrgRole_OrgRoleIndex_TableSort
CannaCommon_OrgRole_SelectRole_TableSort
CannaCommon_PowerGroup_PowerGroup_TableSort
CannaCommon_RoleGroup_Index_TableSort
CannaCommon_RoleInfo_Index_TableSort
CannaCommon_SystemInfo_Index_TableSort
CannaCommon_SystemModule_Index_TableSort
CannaCommon_SystemService_Index_TableSort
CannaCommon_SystemSrc_Index_TableSort

# canna-config-center
CannaConfigCenter_ConfigLang_Index_TableSort
CannaConfigCenter_HashDict_Index_TableSort
CannaConfigCenter_SystemConfig_Index_TableSort

# canna-organization
CannaOrganization_Job_Index_TableSort
CannaOrganization_Member_Index_TableSort
CannaOrganization_Role_Index_TableSort

# canna-system
CannaSystem_PowerGroup_Index_TableSort

# travel-manager
TravelManager_GoodsInfo_Index_TableSort
TravelManager_CityInfo_Index_TableSort
TravelManager_SceneryInfo_Index_TableSort
TravelManager_GameInfo_Index_TableSort
TravelManager_GameResult_Index_TableSort
TravelManager_MoneyRate_Index_TableSort
TravelManager_GameRuleTickets_Index_TableSort
TravelManager_GameRuleNoTickets_Index_TableSort
TravelManager_GameApp_Index_TableSort
TravelManager_XbSetting_Index_TableSort
TravelManager_GuessInfo_Index_TableSort
TravelManager_GuessPhase_Index_TableSort
TravelManager_MemberInfo_Index_TableSort
TravelManager_MemberInfo_AssetDetail_TableSort
TravelManager_FundLog_Index_TableSort
TravelManager_GuessPhase_PlayerDetail_TableSort
TravelManager_GuessGroup_Index_TableSort
TravelManager_GuessPhase_OddsDetail_TableSort
TravelManager_AgentProfit_Index_TableSort
TravelManager_RechargeStrategy_Index_TableSort

# canna-sms
CannaSms_MessageConfig_Index_TableSort
CannaSms_MessageSearch_Index_TableSort
CannaSms_MessageDefault_Index_TableSort

# plugin-younger-manager
YoungerManager_SignatureLabel_Index_TableSort
YoungerManager_FoodLabel_Index_TableSort
YoungerManager_InventoryLabel_Index_TableSort
YoungerManager_GoodsBook_Index_TableSort
YoungerManager_CrowdType_Index_TableSort
YoungerManager_GoodsFood_Index_TableSort
YoungerManager_FoodType_Index_TableSort
YoungerManager_ActionInfo_Index_TableSort
YoungerManager_BraceletInfo_Index_TableSort
YoungerManager_CabinetInfo_Index_TableSort
YoungerManager_ControlInfo_Index_TableSort
YoungerManager_ControlCabinet_Index_TableSort
YoungerManager_CouponInfo_Index_TableSort
YoungerManager_GoodsCard_Index_TableSort
YoungerManager_MemberInfo_Index_TableSort

# plugin-exam-manager
ExamManager_SpecialtyInfo_Index_TableSort
ExamManager_CourseInfo_Index_TableSort
ExamManager_QuestionType_Index_TableSort
ExamManager_QuestionInfo_Index_TableSort
ExamManager_PaperInfo_Index_TableSort
ExamManager_PaperQuestion_Index_TableSort
ExamManager_PeriodInfo_Index_TableSort
ExamManager_ChapterQuestion_Index_TableSort

# plugin-urgent-organization
UrgentOrganization_ContactsInfo_Index_TableSort
UrgentOrganization_AddressBook_Index_TableSort
UrgentOrganization_GroupInfo_Index_TableSort
UrgentOrganization_MemberGroupEdit_Index_TableSort

# plugin-app-manager
AppManager_AppCenter_Index_TableSort
AppManager_AppVersion_Index_TableSort