const express = require('express')
const router = express.Router()
const controller = require('../controller/violation')
const rateLimit = require('express-rate-limit')

//one user can't access API more than 10 time in a minute.
const limter = rateLimit({
    max: 10,
    windowMs: 1 * 60 * 1000,
});
router.post('/createViolation',limter, controller.makeViolation)
router.get('/getViolation',limter, controller.getViolation)
router.put('/violation/update/:id',limter, controller.updateViolation)
router.delete('/violation/delete/:id',limter, controller.removeViolation)

module.exports = router;