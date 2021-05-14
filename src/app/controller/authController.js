const User = require('../model/Auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const{one} = require('../../until/mongoose');


class auController {
    register(req, res,next){
        res.render('auth/register')
    }
    //login
    loginPage(req,res,next){
        res.render('auth/login')
    }
    async login(req,res,next){
        try {
            const user = await User.findOne({email: req.body.email});
            if(!user){
                res.send('emai not found')
            }
            if(bcrypt.compareSync(req.body.password, user.password)){
                const token = jwt.sign({userId: user._id},process.env.APP_SECRET);
                res.render('auth/login',{
                    user: one(user)
                })
            }else{
                res.send('password is correct')
            }
        } catch (error) {
           res.send('duong')
        }
    }
   //post auth/action register
    async registerAction(req,res,next){
       try {
            const user = await User.create(req.body);
            const token = jwt.sign({userID: user._id}, process.env.APP_SECRET);
            res.render('auth/action-register',{
                user : one(user)
            })
       } catch (error) {
           res.send('register err')
       }
    }
}



module.exports = new auController;
