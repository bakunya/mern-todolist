const config = {
    port: 8000,
    host: 'localhost',
    mongoURI: 'mongodb://localhost:27017/todolist',
    JWTSecretKey: 'jwt-secret-random-string',
    JWTExpires: 60 * 60 * 24 * 3 // 3 days
}

module.exports = config