const cds = require('@sap/cds')

module.exports = cds.service.impl(function () {
  this.on('logMessage', req => {
    const input = req.data.input || 'Hello from CAP unbound action'
    console.log(`[ConsoleService] ${input}`)
    return `Logged: ${input}`
  })
})
