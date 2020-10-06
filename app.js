const express = require('express')

const http = require('http')

// eslint-disable-next-line no-unused-vars
const socketio = require('socket.io')

const bodyParser = require('body-parser')

const cors = require('cors')

const usersRouter = require('./src/router/users')

const { PORT } = require('./src/helper/env')
const path = require('path')
// eslint-disable-next-line no-unused-vars
const ejs = require('ejs')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) => {
  console.log('user connected')

  socket.on('send-message', (msg) => {
    io.emit('get-message', msg)
  })

  socket.on('disconnect', () => {
    console.log('user disconnect')
  })
})
// eslint-disable-next-line no-undef
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

app
  .use('/api/v1', usersRouter)
  .use(express.static('src/upload'))

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
