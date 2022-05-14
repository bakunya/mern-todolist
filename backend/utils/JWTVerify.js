const jwt = require("jsonwebtoken")
const { JWTSecretKey } = require("../config")

const JWTVerify = (encodedToken) => new Promise((resolve, reject) => {
    jwt.verify(encodedToken, JWTSecretKey, (er, decoded) => {
        if(er) return reject(er)
        return resolve(decoded)
    })
})

module.exports = JWTVerify