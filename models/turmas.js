const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Turmas = sequelize.define('Turmas',{
        //define as informaçoes da tabela colunas

    idTurmas: {
        type: Sequelize.INTEGER,
        primaryKey: true,       //define essa coluna como a chave primária
        autoIncrement: true     // indica que é uma chave primária autoincrementável
    },

    codigo: Sequelize.STRING,
    descricao: Sequelize.STRING,
    inicio: Sequelize.DATE,
    fim: Sequelize.DATE,
    fotos: Sequelize.STRING,
},
{
    //precisa disso pq nao tem as colunas createdAt e updateAt no bd
    timestamps: false //adiciona colunaqs createdAt e updateAt automaticamente
});
module.exports = Turmas;