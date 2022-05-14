const jwt = require('jsonwebtoken')
const { JWTSecretKey, JWTExpires } = require('../config')

const JWTSign = (username, id) => new Promise((resolve, reject) => {
    jwt.sign(
        { username, _id: id }, 
        JWTSecretKey, 
        { expiresIn: JWTExpires, algorithm: 'HS384' }, 
        (er, token) => {
            if(er) return reject(er)
            return resolve(token)
        }
    )    
})

module.exports = JWTSign