//nesse arquivo estarão todas as rotas
//no caso de um projeto com muitas rotas é possível quebrar as rotas em mais arquivos
const express = require('express');
const router = express.Router();
const usuarioController = require ('../controllers/usuarios')
const turmasController = require('../controllers/turmas')

router.get('/usuarios', usuarioController.getAll)           //retorna todos os usuarios
router.get('/usuario/:id', usuarioController.getById)      //retorna um usuário expecífico
router.post('/usuario', usuarioController.createUsuario)  //cria um usuario passando informação no body

router.get('/turmas', turmasController.getAll )
router.get('/turma/:id', turmasController.getById) 
router.post('/turmas', turmasController.createTurmas)

//atualiza dados de turma e usuario
router.put('/turma/:id', turmasController.updateTurma)
router.put('/usuario/:id', usuarioController.updateUsuario)

// Deleta turma e usuário expecífico
router.delete('/turma/:id', turmasController.deleteTurma)
router.delete('/usuario/:id', usuarioController.deleteUsuario)

module.exports = router;