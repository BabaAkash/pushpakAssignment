const express = require('express')
const sequelize = require('./util/database')
const vehicleRouter = require('./Route/vehicleRoute')
const violationRouter = require('./Route/violationRoute')
const vehicle =require('./model/vehicle')
const violation =require('./model/violation')

const bodyParser = require('body-parser')
const app = express()

// Middleware
app.use(bodyParser.json())

// Router
app.use(vehicleRouter)
app.use(violationRouter)

//relation
vehicle.hasMany(violation)
violation.belongsTo(vehicle)

sequelize.sync().then(res=>{
    app.listen(4000)
}).catch(err=>{
    console.log(err)
})
    

