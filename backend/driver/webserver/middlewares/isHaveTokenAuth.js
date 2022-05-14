const isHaveTokenAuth = (req, res, next) => {
    if(req.headers?.auth && req.headers?.auth?.split(' ')[0] === 'Bearer') {
        req.headers.auth = req.headers.auth.split(' ')[1].trim()
        return next()
    }

    res.status(401)
    return next(Error('Unauthorized.'))
}

module.exports = isHaveTokenAuth