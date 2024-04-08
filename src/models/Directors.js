const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Directors = sequelize.define('directors',{
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nationality:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false
    },
    birthday:{
        type: DataTypes.DATE,
        allowNull:false
    }
})

module.exports = Directors;