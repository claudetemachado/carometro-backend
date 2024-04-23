//models/Usuario.js

const Sequelize = require('sequelize');
const Sequelize = require('../config/sequelize');

const Usuario = sequelize.define('Usuarios',{
        //define as informaçoes da tabela colunas

        idUsuarios: {
            type: Sequelize.INTEGER,
            primaryKey: true,       //define essa coluna como a chave primária
            autoIncrement: true     // indica que é uma chave primária autoincrementável
        },
    
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    cpf: Sequelize.STRING,
    senha: Sequelize.STRING,
    celular: Sequelize.STRING,
    cep: Sequelize.STRING,
    logradouro: Sequelize.STRING,
    bairro: Sequelize.STRING,
    cidade: Sequelize.STRING,
    estado: Sequelize.STRING,
    imagem: Sequelize.STRING,
    Tipor_Usuarios_idTipos_Usuarios: Sequelize.NUMBER, 
},
{
    //precisa disso pq nao tem as colunas createdAt e updateAt no bd
    timestamps: false //adiciona colunaqs createdAt e updateAt automaticamente
});
module.exports = Usuario;