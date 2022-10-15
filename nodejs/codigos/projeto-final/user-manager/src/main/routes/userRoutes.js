const Router = require('express');
const UserController = require('../../presentation/controllers/UserController');

const router = Router();
const controller = new UserController();

router.post('/users', controller.create);
router.get('/users', controller.list);

module.exports = router;
