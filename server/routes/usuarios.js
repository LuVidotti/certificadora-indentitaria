const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
require("../models/Usuario");
const Usuario = mongoose.model("usuarios");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.SECRET;
const auth = require("../auth/auth");


//rota para criar usuarios comuns
router.post("/", auth.verificaAdmin, (req,res) => {
    if(!req.body.nomeUsuario || typeof req.body.nomeUsuario === undefined || req.body.nomeUsuario === null) {
        return res.status(400).json({message: "Erro, nome de usuario invalido"});
    }

    if(!req.body.senha || typeof req.body.senha === undefined || req.body.senha === null) {
        return res.status(400).json({message: "Erro, senha invalida"});
    }

    const salt = bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(req.body.senha, salt);

    const novoUsuario = {
        nomeUsuario: req.body.nomeUsuario,
        senha: hash
    }

    new Usuario(novoUsuario).save().then((usuarioCriado) => {
        return res.status(201).json({message: "Usuario criado com sucesso!!!", usuarioCriado:usuarioCriado});
    }).catch((erro) => {
        return res.status(500).json({message: "Erro interno no servidor, erro: "+erro});
    })
})

//rota para criar admins
router.post("/admin", auth.verificaAdmin, (req,res) => {
    if(!req.body.nomeUsuario || typeof req.body.nomeUsuario === undefined || req.body.nomeUsuario === null) {
        return res.status(400).json({message: "Erro, nome de usuario invalido"});
    }

    if(!req.body.senha || typeof req.body.senha === undefined || req.body.senha === null) {
        return res.status(400).json({message: "Erro, senha invalida"});
    }

    const salt = bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(req.body.senha, salt);

    const novoUsuario = {
        nomeUsuario: req.body.nomeUsuario,
        senha: hash,
        isAdmin: 1
    }

    new Usuario(novoUsuario).save().then((usuarioCriado) => {
        return res.status(201).json({message: "administrador criado com sucesso!!!", usuarioCriado:usuarioCriado});
    }).catch((erro) => {
        return res.status(500).json({message: "Erro interno no servidor, erro: "+erro});
    })
})

//rota de login
router.post("/login", (req,res) => {
    if(!req.body.nomeUsuario || typeof req.body.nomeUsuario === undefined || req.body.nomeUsuario === null) {
        return res.status(400).json({message: "Erro, nome de usuario invalido"});
    }

    if(!req.body.senha || typeof req.body.senha === undefined || req.body.senha === null) {
        return res.status(400).json({message: "Erro, senha invalida"});
    }

    Usuario.findOne({nomeUsuario: req.body.nomeUsuario}).then((usuario) => {
        if(!usuario) {
            return res.status(404).json({message: "Não existe um usuário com este nome de usuário"});
        }

        bcryptjs.compare(req.body.senha, usuario.senha, (erro, batem) => {
            if(erro) {
                return res.status(400).json({message: "Erro ao verificar senhas"});
            }

            if(!batem) {
                return res.status(400).json({message: "Senha incorreta"});
            } else {
                const token = jwt.sign({userId: usuario._id}, SECRET, {expiresIn: "2h"});
                return res.status(201).json({message: "Login realizado com sucesso!!!", token:token});
            }
        })
    }).catch((erro) => {
        return res.status(500).json({message: "Erro interno no servidor, erro: "+erro});
    })
})

//rota para ver todos os usuarios
router.get("/", auth.verificaAdmin, (req,res) => {
    Usuario.find().then((usuarios) => {
        return res.status(200).json(usuarios);
    }).catch((erro) => {
        return res.status(500).json({message: "Erro interno no servidor, erro: "+erro});
    })
})

//rota para deletar usuarios
router.delete("/:id", auth.verificaAdmin, (req,res) => {
    Usuario.deleteOne({_id:req.params.id}).then((usuarioDeletado) => {
        return res.status(200).json({message: "Usuario deletado com sucesso", usuarioDeletado:usuarioDeletado});
    }).catch((erro) => {
        return res.status(500).json({message: "Erro interno no servidor, erro: "+erro});
    })
})

//rota para ver perfil
router.get("/perfil", auth.verificaUser, (req,res) => {
    const user = req.user;

    Usuario.findOne({_id: user._id}).then((usuario) => {
        return res.status(200).json(usuario);
    }).catch((erro) => {
        return res.status(500).json({message: "Erro interno no servidor, erro: "+erro});
    })
})


module.exports = router;