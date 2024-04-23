//nesse arquivo estarão todas as rotas
//no caso de um projeto com muitas rotas é possível quebrar as rotas em mais arquivos
const express = require('express');
const router = express.Router();
const usuarioController = require ('../controllers/usuario')

//retorna todos os usuarios]
router.get('/usuarios', usuarioController.getAll)
router.get('/usuario/:id', usuarioController.getById)

//cria um usuario passando informação no body
router.post('/usuario', usuarioController.createUsuario)

// inserir outras rotas -exemplo
/* router.get('/turmas', turmasController.getAll)
router.get('/turmas/:id', turmasController.getById)*/



module.exports= router;
