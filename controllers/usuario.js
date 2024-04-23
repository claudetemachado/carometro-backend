const Usuario = require('../models/usuarios');
exports.getAll = async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios)
};

exports.getById = async(req, res) => {
    //no router id é o que vem depois do usuario
    const idDoParam = req.params.id;
    const usuarioencontrado = await Usuario.findOne({idUsuarios: idDoParam});
    res.json(usuarioencontrado)
};

exports.createUsuario = async(req, res) => {
    /*const usuarioCadastrado = await Usuario.findOne({cpf: req.body.cpf});
    //verificação duplicidade de usuario cadastrado

    if (usuarioCadastrado){
        return res.send('Já existe um usuário cadastrado nesse CPF.')
    } */

    const usuarioCriado = await Usuario.create(req.body)
    console.log("usuarioCriado", usuarioCriado)
    return res.send("oi")
    //res.json(usuarios)
};