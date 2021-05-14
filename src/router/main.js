
const routerMain = require('./site');
const routerName = require('./name');
const routeAuth = require('./auth');



function router (app){
    app.use('/name', routerName);
    app.use('/auth', routeAuth);
    app.use('/', routerMain);
}

module.exports = router;
