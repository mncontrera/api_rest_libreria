const { DataTypes, Model } = require('sequelize');
const { dbInstance } = require('../db/sequelize-config')

class User extends Model {

}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    userName: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: dbInstance,
    modelName: 'User',
    createdAt: false,
    updatedAt: false
})

//User.sync();

module.exports = { User }