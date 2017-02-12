var middleware = {
    handleRequest: function (req, res, next) {
        console.log(' Middleware hit!!');
        next();
    },
    logger: function (req, res, next) {
        console.log('Request: '+ new Date() + ' ' + req.method + ' ' + req.originalUrl);
        next();
    }
};

module.exports = middleware;
