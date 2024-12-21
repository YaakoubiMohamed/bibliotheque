const { Sequelize, DataTypes } = require("sequelize");

const Auteur = Sequelize.define('Auteur',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoInment: true
    },
    nom:{
        type: DataTypes.STRING,
        allowNull:false
    },
    prenom:{
        type: DataTypes.STRING,
        allowNull:false
    },
    biographie:{
        type: DataTypes.TEXT
    },
})

module.exports = Auteur;