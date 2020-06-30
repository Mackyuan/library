# just a flag
ENV = 'production'

# base api
VUE_APP_BASE_API = 'http://feature.roywise.cn/gateway-feature/api'
VUE_APP_BASE_API_WEB_SOCKET = 'http://feature.roywise.cn/gateway-feature/api'

# vue-cli uses the VUE_CLI_BABEL_TRANSPILE_MODULES environment variable,
# to control whether the babel-plugin-dynamic-import-node plugin is enabled.
# It only does one thing by converting all import() to require().
# This configuration can significantly increase the speed of hot updates,
# when you have a large number of pages.
# Detail:  https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/babel-preset-app/index.js

VUE_CLI_BABEL_TRANSPILE_MODULES = true
