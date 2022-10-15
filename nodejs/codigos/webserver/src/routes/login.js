const Router = require('express');
const LoginController = require('../controllers/login');

const router = Router();
const controller = new LoginController();

router.post('/login', controller.handle);

module.exports = router;
