//models/Usuario.js

const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Tipos_Usuarios = sequelize.define('Tipos_Usuarios',{
        //define as informaçoes da tabela colunas

        idTipos_Usuarios: {
            type: Sequelize.INTEGER,
            primaryKey: true,       //define essa coluna como a chave primária
            autoIncrement: true     // indica que é uma chave primária autoincrementável
        },
    
    Descricao: Sequelize.STRING,
},
{
    //precisa disso pq nao tem as colunas createdAt e updateAt no bd
    timestamps: false //adiciona colunaqs createdAt e updateAt automaticamente
});
module.exports = Tipos_Usuarios;