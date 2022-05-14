function errorRouter(er, req, res, next) {
    const statusCode = res?.statusCode && res?.statusCode <= 201 
        ? 500 
        : res?.statusCode

    return res.status(statusCode).json({ message: er.message })
}

module.exports = errorRouter