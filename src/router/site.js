const express = require('express');
const router = express.Router();

const mainRouter = require('../app/controller/mainController');

router.get('/',mainRouter.home);





module.exports = router;
