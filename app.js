const express = require('express')

const http = require('http')
const usersModels = require('./src/models/users')

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

  socket.on('get-all-users', () => {
    usersModels.getAll()
      .then((result) => {
        if (result.length === 0) {
          console.log('data not found')
        } else {
          io.emit('list-users', result)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  })
  socket.on('join-room', (payload) => {
    socket.join(payload)
  })
  socket.on('send-message', (payload) => {
    usersModels.insertMessage(payload)
      .then((result) => {
        io.to(payload.receiver).emit('list-messages', payload)
      })
      .catch((err) => {
        console.log(err)
      })
  })
  socket.on('get-history-message', (payload) => {
    usersModels.getHistoryMessage(payload)
      .then((result) => {
        io.to(payload.sender).emit('history-list-message', result)
      })
      .catch((err) => {
        console.log(err)
      })
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
