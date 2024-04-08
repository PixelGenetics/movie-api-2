const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Genre = sequelize.define('genre',{
    Genre: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Genre;