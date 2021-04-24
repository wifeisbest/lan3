
const routerMain = require('./site');
const routerName = require('./name');




function router (app){
    app.use('/name', routerName)
    
    app.use('/', routerMain);
}

module.exports = router;
