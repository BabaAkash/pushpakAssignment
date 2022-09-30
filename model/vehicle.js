const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const vehicle = sequelize.define('vehicle',{
    id:{
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    licensePlateNumber:{
        type : Sequelize.STRING,
        allowNull  : false 
    },
    manufacturerName:{
        type : Sequelize.STRING,
        allowNull  : false 
    },
    model:{
        type : Sequelize.STRING,
        allowNull  : false 
    },
    fuelType: {
        type : Sequelize.STRING,
        allowNull  : false 
    },
    ownerName:{
        type : Sequelize.STRING,
        allowNull  : false 
    },
    rc_status:{
        type : Sequelize.STRING,
        allowNull  : false 
    },
    vehicleColor: {
        type : Sequelize.STRING,
        allowNull  : false 
    },
    registrationDate :{
        type : Sequelize.DATEONLY,
        allowNull  : false 
    },
    insuranceUpto: {
        type : Sequelize.DATEONLY,
        allowNull  : false 
    },
    fitnessUpto: {
        type : Sequelize.DATEONLY,
        allowNull  : false 
    },
    roadTaxUpto: {
        type : Sequelize.DATEONLY,
        allowNull  : false 
    }
})

module.exports = vehicle;