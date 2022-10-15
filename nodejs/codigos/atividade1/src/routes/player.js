const Router = require('express');
const PlayerController = require('../controllers/player');

const router = Router();
const controller = new PlayerController();

router.get('/players', controller.list);
router.post('/players', controller.validate, controller.create);

module.exports = router;
