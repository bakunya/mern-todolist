const { port, host } = require('./config')
const Server = require('./driver/webserver/server')

const server = new Server()
server.listen(port, host).start()