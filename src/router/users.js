const express = require('express')

const usersController = require('../controller/users')
const { authentication, authorization } = require('../helper/auth')

const router = express.Router()

router
  .post('/users/register', usersController.register)
  .post('/users/login', usersController.login)
  .post('/users/refresh-token', usersController.renewToken)
  .get('/users/getDetail/:id', authentication, authorization, usersController.getDetail)

module.exports = router
