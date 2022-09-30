const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const violation = sequelize.define('violation',{
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
    violationType:{
        type : Sequelize.STRING,
        allowNull  : false 
    },
    status:{
        type : Sequelize.STRING,
        allowNull  : false 
    },
    date: {
        type : Sequelize.DATEONLY,
        allowNull  : false 
    },
    time:{
        type : Sequelize.TIME,
        allowNull  : false 
    },
    location:{
        type : Sequelize.STRING,
        allowNull  : false 
    },
    videoUrl: {
        type : Sequelize.STRING,
        allowNull  : false 
    }
})

module.exports = violation;