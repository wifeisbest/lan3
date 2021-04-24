const express = require('express');
const router = express.Router();

const controllerName = require('../app/controller/nameController');

router.delete('/:id',controllerName.destroy)
router.put('/:id',controllerName.putDatabase)
router.get('/update/:id',controllerName.clickUpdate)
router.get('/update',controllerName.update)
router.post('/container',controllerName.saveData)
router.get('/create',controllerName.createName)
router.get('/:slug',controllerName.showdetail)
router.get('/',controllerName.index)


module.exports = router;
