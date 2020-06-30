import '@canna/canna-h5/src/icons' // icon
import '@canna/canna-h5/src/icons/load-svg'
// import '@canna/asset-info/src/icons/load-svg'
const req = require.context('./svg', true, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
