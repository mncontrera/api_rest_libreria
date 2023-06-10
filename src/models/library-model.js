const { DataTypes, Model } = require('sequelize');
const { dbInstance } = require('../db/sequelize-config')

class Library extends Model {

}

Library.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    eliminated: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize: dbInstance,
    modelName: 'Library',
    createdAt: false,
    updatedAt: false
})

module.exports = { Library }