const { Sequelize, DataTypes } = require("sequelize");

const Livre = Sequelize.define('Livre',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoInment: true
    },
    titre:{
        type: DataTypes.STRING,
        allowNull:false
    },
    description:{
        type: DataTypes.TEXT
    },
    date_publication:{
        type: DataTypes.DATE
    }
})

module.exports = Livre;