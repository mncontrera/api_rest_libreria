const { DataTypes, Model } = require('sequelize');
const { dbInstance } = require('../db/sequelize-config')

class Book extends Model {

}

Book.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    isbn: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING
    },
    autor: {
        type: DataTypes.STRING
    },
    year: {
        type: DataTypes.STRING
    },
    library: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize: dbInstance,
    modelName: 'Book',
    createdAt: false,
    updatedAt: false
})

//User.sync();

module.exports = { Book }