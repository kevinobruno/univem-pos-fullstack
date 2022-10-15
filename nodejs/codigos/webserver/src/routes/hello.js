const Router = require('express');
const HelloController = require('../controllers/hello');

const router = Router();
const controller = new HelloController();

router.get('/hello', controller.handle);

module.exports = router;
