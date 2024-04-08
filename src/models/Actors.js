const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Actors = sequelize.define('actors',{
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

module.exports = Actors;