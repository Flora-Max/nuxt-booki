const app = require('./app')

const host = process.env.HOST || 'localhost'
const port = (process.env.PORT && parseInt(process.env.PORT)) || 3000

app.listen(port, host)
  .on('listening', function () {
    const { address, port } = this.address()
    const message = `🚀 Running on http://${address}:${port}/`

    console.info(message)
  })
