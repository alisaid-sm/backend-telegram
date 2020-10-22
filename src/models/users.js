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
  getDetail: (name) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE name='${name}'`, (err, result) => {
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
      db.query('UPDATE users SET ? WHERE name=?', [data, id], (err, result) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users', (err, result) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  insertMessage: (payload) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO message (sender, receiver, message, image) VALUES ('${payload.sender}','${payload.receiver}','${payload.message}','${payload.image}')`, (err, result) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  getHistoryMessage: (payload) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM message
    WHERE (sender='${payload.sender}' AND receiver='${payload.receiver.name}') OR (sender='${payload.receiver.name}' AND receiver='${payload.sender}')`, (err, result) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  delHistoryMessage: (payload) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM message WHERE (sender='${payload.sender}' AND receiver='${payload.receiver.name}') OR (sender='${payload.receiver.name}' AND receiver='${payload.sender}')`, (err, result) => {
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
