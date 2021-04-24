const Hoa = require('../model/Name');
const { muti } = require('../../until/mongoose');
const { one } = require('../../until/mongoose');

class nameController {
    // database do not contains filed slug
    index(req, res){
        res.send('please add filed slug in your database')
    }
    // show detail
    showdetail(req, res, next){
        Hoa.findOne({slug: req.params.slug})
            .then(duongs => res.render('name/showdetail', {
                duongs : one(duongs)
            }))
            .catch(next)
    }
    // Interface Create Name [Get]
    createName (req, res){
        res.render('name/nameCreate');
    }
    // post request [POST] ====================================================> C
    saveData ( req, res , next){
        const name = new Hoa(req.body);
        name.save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
    //Update page
    update ( req, res, next){
        Hoa.find({})
            .then(names => res.render('name/updateName',{
                names : muti(names)
            }))
            .catch(next);
    }
    // click update page [GET]
    clickUpdate (req, res, next){
        Hoa.findOne({_id: req.params.id})
            .then(name => res.render('name/clickUpdate',
                {name : one(name)}
            ))
            .catch(next)
        
    }
    // save change into database [Put]============================================> U
    putDatabase (req, res, next){
        Hoa.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/') )
            .catch(next)
    }

    // delete =========================================================== D
    destroy(req, res, next){
        Hoa.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back') )
            .catch(next)
    }




}

module.exports = new nameController;
