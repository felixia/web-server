var express = require('express'),
    app = express();

var middleware = {
    handleRequest: function (req, res, next) {
        console.log(' Middleware hit!!');
        next();
    },
    logger: function (req, res, next) {
        console.log('Request: '+ new Date() + ' ' + req.method + ' ' + req.originalUrl);
    }
}

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(middleware.handleRequest);
app.use(middleware.logger);



app.get('/about-us ', function (req, res) {
    res.send('About Us');
});
app.get('/contact-us', function (req, res) {
    res.send('Contact Us');
});
app.get('/news-feed', function (req, res) {
    res.send('News Feed');
});

app.listen(app.get('port'), function () {
    console.log('Express server running on port ' + app.get('port'));
});