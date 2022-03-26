const path = require('path')
const jsonServer = require('json-server')

const app = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))

const middlewares = jsonServer.defaults({
  readOnly: true,
  bodyParser: false,
})

app.use(middlewares)
app.use(router)

module.exports = app
