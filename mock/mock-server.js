const { makeServer } = require('@canna/canna-h5/mock/mock-server-base')
const mocks = require('./mock-route.js')
module.exports = app => makeServer(app, mocks)
