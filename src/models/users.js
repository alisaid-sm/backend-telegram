const db = require('../config/conn')

const users = {
  register: (data) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO users SET ?', data, (err, result) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  login: (data) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users WHERE name = ?', data.name, (err, result) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  updateUser: (email) => {
    return new Promise((resolve, reject) => {
      db.query(`UPDATE users SET status = 1 WHERE email='${email}'`, (err, result) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  updateRefreshToken: (token, id) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE users SET refreshToken= ? WHERE id= ?', [token, id], (err, result) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  checkRefreshToken: (refreshToken) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users WHERE refreshToken = ?', refreshToken, (err, result) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  getDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE id='${id}'`, (err, result) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  updatePatch: (id, data) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE users SET ? WHERE id=?', [data, id], (err, result) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  }
}

module.exports = users
