const config = {
    port: 8000,
    host: 'localhost',
    mongoURI: 'mongodb+srv://bakunya:V5UxNogFuTRBKRQR@cluster0.hymw2.mongodb.net/todolist?retryWrites=true&w=majority',
    JWTSecretKey: 'jwt-secret-random-string',
    JWTExpires: 60 * 60 * 24 * 3 // 3 days
}

module.exports = config