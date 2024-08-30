const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/Doacao");
const Doacao = mongoose.model("doacoes");
const auth = require("../auth/auth");

router.post("/", auth.verificaUser, (req,res) => {
    if(!req.body.tipo || typeof req.body.tipo === undefined || req.body.tipo === null) {
        return res.status(400).json({message: "Erro, tipo de doação invalida"});
    }

    if(!req.body.quantidade || typeof req.body.quantidade === undefined || req.body.quantidade === null) {
        return res.status(400).json({message: "Erro, quantidade de doação invalida"});
    }

    if(!req.body.data || typeof req.body.data === undefined || req.body.data === null) {
        return res.status(400).json({message: "Erro, data de doação invalida"});
    }

    if(!req.body.doador || typeof req.body.doador === undefined || req.body.doador === null) {
        return res.status(400).json({message: "Erro, doador invalido"});
    }

    const novaDoacao = {
        tipo: req.body.tipo,
        quantidade: req.body.quantidade,
        data: req.body.data,
        doador: req.body.doador
    }

    new Doacao(novaDoacao).save().then((doacaoSalva) => {
        return res.status(201).json({message: "Doação registrada com sucesso", doacaoSalva:doacaoSalva});
    }).catch((erro) => {
        return res.status(500).json({message: "Erro interno no servidor, erro: "+erro});
    })
})

router.put("/:id", auth.verificaUser, (req,res) => {
    if(!req.body.tipo || typeof req.body.tipo === undefined || req.body.tipo === null) {
        return res.status(400).json({message: "Erro, tipo de doação invalida"});
    }

    if(!req.body.quantidade || typeof req.body.quantidade === undefined || req.body.quantidade === null) {
        return res.status(400).json({message: "Erro, quantidade de doação invalida"});
    }

    if(!req.body.data || typeof req.body.data === undefined || req.body.data === null) {
        return res.status(400).json({message: "Erro, data de doação invalida"});
    }

    if(!req.body.doador || typeof req.body.doador === undefined || req.body.doador === null) {
        return res.status(400).json({message: "Erro, doador invalido"});
    }

    Doacao.findOne({_id: req.params.id}).then((doacao) => {
        if(!doacao) {
            return res.status(404).json({message: "Doacao nao encontrada"});
        }

        doacao.tipo = req.body.tipo;
        doacao.quantidade = req.body.quantidade;
        doacao.data = req.body.data;
        doacao.doador = req.body.doador;

        doacao.save().then((doacaoAtualizada) => {
            return res.status(200).json({message: "Doação editada com sucesso!!!", doacaoAtualizada:doacaoAtualizada});
        }).catch((erro) => {
            return res.status(500).json({message: "Erro interno no servidor, erro: "+erro});
        })
    }).catch((erro) => {
        return res.status(500).json({message: "Erro interno no servidor, erro: "+erro});
    })
})

router.delete("/:id", auth.verificaUser, (req,res) => {
    Doacao.deleteOne({_id: req.params.id}).then(() => {
        return res.status(200).json({message: "Doação deletada com sucesso!!!"});
    }).catch((erro) => {
        return res.status(500).json({message: "Erro interno no servidor, erro: "+erro});
    })
})

router.get("/", (req,res) => {
    Doacao.find().then((doacoes) => {
        return res.status(200).json(doacoes);
    }).catch((erro) => {
        return res.status(500).json({message: "Erro interno no servidor, erro: "+erro});
    })
})

module.exports = router;