const { mockXHRStart } = require('@canna/canna-h5/mock/mock-utils')
const { mocks } = require('./mock-mocks')

// for front mock
// please use it cautiously, it will redefine XMLHttpRequest,
// which will cause many of your third-party libraries to be invalidated(like progress event).
function mockXHR () {
  mockXHRStart(mocks)
}

module.exports = {
  mockXHR: mockXHR
}
