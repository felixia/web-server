var express = require('express'),
    app = express();
var middleware = require('./middleware');


app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
//app.use(middleware.handleRequest);
app.use(middleware.logger);



app.get('/about-us ', middleware.handleRequest, function (req, res) {
    res.send('About Us all');
});

app.listen(app.get('port'), function () {
    console.log('Express server running on port ' + app.get('port'));
});