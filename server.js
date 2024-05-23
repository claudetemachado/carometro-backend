const express = require('express');
const sequelize = require('./config/sequelize')
const router = require('./routes/router')
require('dotenv').config();

sequelize.authenticate() 
    .then(() => {
        console.log('Conexão com o Banco de Dados bem-sucedida!')
        return sequelize.query("SHOW TABLES");
    })
    .then(([result, metadata]) => {
        console.log('Tabelas no Banco de Dados:');
        console.log(result);

        app.listen(3005, () => {
            console.log(`Servidor express iniciado`)
        });
    })
    .catch(err => {
        console.error('Erro ao conectar ao Banco de Dados:', err)
    });

const app = express();

app.use(express.json())
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor Express iniciado na porta ${PORT}`)
});