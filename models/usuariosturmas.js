
const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const UsuariosTurmas = sequelize.define('usuarios_turmas', {
      //define as informações da tabela colunas
        Turmas_idTurmas:{
            type: Sequelize.INTEGER,
                primaryKey: false //indica que não é chave primária
        },

        Usuarios_idUsuarios:{
            type: Sequelize.INTEGER,
            primaryKey: false
        },
    },
    {
        //precisa disso pq n tem as colunas createAt e updateAt no bd
        timestamps: false // adiciona colunas createAt e updateAt no bd automaticamente
    });
UsuariosTurmas.removeAttribute("id")
module.exports = UsuariosTurmas;