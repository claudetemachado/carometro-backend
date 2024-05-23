const Usuario = require('../models/usuarios');
const UsuariosTurmas = require('../models/usuariosturmas')
exports.getAll = async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios)
};

exports.getById = async (req, res) => {
    const idDoParam = req.params.id;
    const usuarioEncontrado = await Usuario.findOne({ where: { idUsuarios: idDoParam } });
    if (usuarioEncontrado) {
        res.json(usuarioEncontrado);
    } else {
        res.status(404).send('Usuário não encontrado');
    }
};

exports.createUsuario = async(req, res) => {

    const usuarioCadastrado = await Usuario.findOne({where: {cpf: req.body.cpf}});
    //verificação duplicidade de usuario cadastrado
    if(usuarioCadastrado){
        return res.send('Já existe um usuário cadastrado nesse CPF.')
    }

    const usuarioCriado = await Usuario.create(req.body)
    if(usuarioCriado.idUsuarios && req.body.Turmas_idTurmas){
        await UsuariosTurmas.create({
            Turmas_idTurmas: req.body.Turmas_idTurmas, //idTurma vem do front como informação de seleção de turma
            Usuarios_idUsuarios: usuarioCriado.idUsuarios, 
        })
        return res.send("Usuário cadastrado em uma turma")
    }
    return res.send("Usuário Cadastrado, mas sem turma")
    //res.json(usuarios)*/
};


exports.updateUsuario = async(req, res) => {
    const {cpf} = req.body;
    const UsuarioCriado = await Usuario.findOne({ where: {cpf: cpf} });
    if(UsuarioCriado) {
        delete req.body.codigo;
        const [numRowsUpdate] = await Usuario.update(req.body, {where: {cpf: req.body.cpf}})
        if(numRowsUpdate > 0){
            const UsuarioAtualizado = await Usuario.findOne( {where: {cpf: req.body.cpf}});
            return res.send( {message: "Usuário atualizado com sucesso", usuariocomdadosnovos: UsuarioAtualizado});
        }
        else{
            return res.send('Usuário encontrado, porem sem novos dados para atualizar')
        }
    }
    else{
        return res.send('Usuário não encontrado')
    }
};

exports.deleteUsuario = async (req, res) => {
    try{
        const{ id } = req.params;
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).send('Usuário não encontrado');
        }
        const desvincular = await UsuariosTurmas.findOne({ where: {Usuarios_idUsuarios: usuario.idUsuarios} });
        if (desvincular) {
            await desvincular.destroy();
        }
        await usuario.destroy();
        
        return res.send('Usuário deletado com sucesso');
    } catch (error){
        console.error('Erro ao deletar usuário', error);
        return res.status(500).send('Error ao deletar usuário');
    }
};