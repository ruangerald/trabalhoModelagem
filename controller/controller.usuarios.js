const Usuarios = require('../model/Usuarios')

const cadastrar = async (req, res) => {
   dados = req.body 
    try {
        const usuario = await Usuarios.create(dados);
        res.status(200).json({message: 'Usuário cadastrado com sucesso!'});
    }
    catch (err) {
        console.error(err);
        res.status(500).json({message: 'Erro ao cadastrar usuário.'});
    }
}

const listar = async (req, res) => {
    try {
        const usuarios = await Usuarios.findAll();
        res.status(200).json(usuarios);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Erro ao listar usuários.'});
    }
}

const apagar = async (req, res) => {
    const id = req.params.id;
    
    try {
        const usuario = await Usuarios.findByPk(id);
        if (usuario) {
            await usuario.destroy({ where: { id: id } });
            res.status(200).json({message: 'Usuário apagado com sucesso!'});
        } else {
            res.status(404).json({message: 'Usuário não encontrado.'});
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Erro ao apagar usuário.'});
    }

}

const atualizar = async (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    try {
        const usuario = await Usuarios.findByPk(id);
        if (usuario) {
            await usuario.update(dados);
            res.status(200).json({message: 'Usuário atualizado com sucesso!'});
        } else {
            res.status(404).json({message: 'Usuário não encontrado.'});
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Erro ao atualizar usuário.'});
    }
}

