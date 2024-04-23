// arquivo de configuração de RB

module.exports = {
        development: {
            username: process.env.DB_USER || 'root',
            // username: 'root',

            password: 'senaisp',         //senha do banco de dados
            database: 'carometro',       //nome do banco de dados
            host: 'localhost',           //endereço do servidor do banco de dados     
            port: 3306,                  //porta do servidor do banco de dados
            dialect: 'mysql',            //dialeto do banco de dados
            logging: false               //desativa os logs do Sequelize
        },
        // adicione mais ambientes (production, testing, etc) conforme necessario
    };