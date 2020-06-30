const { cannaMocks } = require('@canna/canna-h5/mock/canna-mocks')
const { templateMocks } = require('./template-mocks')

var totalMocks = []
totalMocks = totalMocks.concat(cannaMocks)
totalMocks = totalMocks.concat(templateMocks)

module.exports = {
  mocks: totalMocks
}
