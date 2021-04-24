const Hoa = require('../model/Name');
const { muti } = require('../../until/mongoose');

// Red database ==========================================> R
class mainController {
    home(req, res, next){
        Hoa.find({})
            .then(duongs => res.render('home',
                {duongs : muti(duongs)}
            ))
            .catch(next)
    }
}

module.exports = new mainController;
