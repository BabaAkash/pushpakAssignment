const express = require('express')
const router = express.Router()
const controller = require('../controller/vehicles')
const rateLimit = require('express-rate-limit')

const limter = rateLimit({
    max: 10,
    windowMs: 1 * 60 * 1000,
});


router.post('/createVehicle',limter, controller.makeVehicle)
router.get('/getVehicle',limter, controller.getAllVehicle)
router.put('/Vehicle/update/:id',limter, controller.updateVehicle)
router.delete('/Vehicle/delete/:id',limter, controller.removeVehicle)

module.exports = router;