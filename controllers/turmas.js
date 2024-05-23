const Turmas = require('../models/turmas.js')
const UsuariosTurmas = require('../models/usuariosturmas')

exports.getAll = async (req, res) => {
    const turmas = await Turmas.findAll();
    res.json(turmas)
};

exports.getById = async(req, res) => {
    //no router id é o que vem depois do usuario
    const idDoParam = req.params.id;
    const TurmaEncontrada = await Turmas.findOne({where: {idTurmas: idDoParam}});
    res.json(TurmaEncontrada)
};

exports.createTurmas = async(req, res) => {
    const TurmaCadastrada = await Turmas.findOne({where: {codigo: req.body.codigo}});
    //verificação duplicidade de Turmas cadastrado
    if(TurmaCadastrada){
        return res.send('Já existe uma turma cadastrada com esse código.')
    }

    const TurmaCriada = await Turmas.create(req.body)
    console.log("TurmaCriada", TurmaCriada)
    return res.send("Turma Cadastrada")
    //res.json(Turmas)
};

exports.updateTurma = async (req, res) => {
    try {
        const { codigo } = req.body;

        // Verifica se a turma está cadastrada
        const turmaCadastrada = await Turmas.findOne({ where: { codigo: codigo } });
        if (!turmaCadastrada) {
            return res.status(404).send('Turma não encontrada');
        }

        // Remove o campo 'codigo' do corpo da requisição
        delete req.body.codigo;

        // Atualiza a turma
        const [numRowsUpdate] = await Turmas.update(req.body, { where: { codigo: codigo } });

        if (numRowsUpdate > 0) {
            // Busca a turma atualizada no banco de dados
            const turmaAtualizada = await Turmas.findOne({ where: { codigo: codigo } });
            return res.send({ message: "Turma atualizada com sucesso", turmaAtualizada });
        } else {
            return res.send('Turma encontrada, porém sem novos dados para atualizar');
        }
    } catch (error) {
        console.error('Erro ao atualizar turma', error);
        return res.status(500).send('Erro ao atualizar turma');
    }
};



exports.deleteTurma = async (req, res) => {
    try{
        const {id} = req.params;
        const turma = await Turmas.findOne(id.idTurmas);
        if (!turma) {
            return res.status(404).send('Turma não encontrada');
        }
        const desvincular = await UsuariosTurmas.findOne({ where: {Turmas_idTurmas: turma.idTurmas} });
        if (desvincular) {
            await desvincular.destroy();
        }
        await turma.destroy();
        
        return res.send('Turma deletada com sucesso');
    } catch (error){
        console.error('Erro ao deletar turma', error);
        return res.status(500).send('Erro ao deletar turma');
    }
};