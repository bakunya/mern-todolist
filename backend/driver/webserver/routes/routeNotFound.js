function routeNotFound(req, res, next) {
    res.status(404)
    next(Error(`Route ${req.originalUrl} not found`))
}

module.exports = routeNotFound