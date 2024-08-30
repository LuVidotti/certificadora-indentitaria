const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/Produto");
const Produto = mongoose.model("produtos");
const auth = require("../auth/auth");

router.post("/", auth.verificaUser, (req,res) => {
    if(!req.body.nome || typeof req.body.nome === undefined || req.body.nome === null) {
        return res.status(400).json({message: "Erro, nome de produto invalido"});
    }

    if(!req.body.tipo || typeof req.body.tipo === undefined || req.body.tipo === null) {
        return res.status(400).json({message: "Erro, tipo de produto invalido"});
    }

    if(!req.body.quantidade || typeof req.body.quantidade === undefined || req.body.quantidade === null || req.body.quantidade < 0) {
        return res.status(400).json({message: "Erro, quantidade de produto invalida"});
    }

    if(!req.body.dataValidade || typeof req.body.dataValidade === undefined || req.body.dataValidade === null) {
        return res.status(400).json({message: "Erro, data de validade de produto invalido"});
    }

    if(!req.body.fornecedor || typeof req.body.fornecedor === undefined || req.body.fornecedor === null) {
        return res.status(400).json({message: "Erro, fornecedor de produto invalido"});
    }

    const novoProduto = {
        nome: req.body.nome,
        tipo: req.body.tipo,
        quantidade: req.body.quantidade,
        dataValidade: req.body.dataValidade,
        fornecedor: req.body.fornecedor
    }

    new Produto(novoProduto).save().then((produtoCriado) => {
        return res.status(201).json({message: "Produto adicionado com sucesso!!!", produtoCriado:produtoCriado});
    }).catch((erro) => {
        return res.status(500).json({message: "Erro interno no servidor, erro: "+erro});
    })
})

router.put("/:id", auth.verificaUser, (req,res) => {
    if(!req.body.nome || typeof req.body.nome === undefined || req.body.nome === null) {
        return res.status(400).json({message: "Erro, nome de produto invalido"});
    }

    if(!req.body.tipo || typeof req.body.tipo === undefined || req.body.tipo === null) {
        return res.status(400).json({message: "Erro, tipo de produto invalido"});
    }

    if(!req.body.quantidade || typeof req.body.quantidade === undefined || req.body.quantidade === null || req.body.quantidade < 0) {
        return res.status(400).json({message: "Erro, quantidade de produto invalida"});
    }

    if(!req.body.dataValidade || typeof req.body.dataValidade === undefined || req.body.dataValidade === null) {
        return res.status(400).json({message: "Erro, data de validade de produto invalido"});
    }

    if(!req.body.fornecedor || typeof req.body.fornecedor === undefined || req.body.fornecedor === null) {
        return res.status(400).json({message: "Erro, fornecedor de produto invalido"});
    }

    Produto.findOne({_id: req.params.id}).then((produto) => {
        if(!produto) {
            return res.status(404).json({message: "Erro, produto nao encontrado"});
        }

        produto.nome = req.body.nome;
        produto.tipo = req.body.tipo;
        produto.quantidade = req.body.quantidade;
        produto.dataValidade = req.body.dataValidade;
        produto.fornecedor = req.body.fornecedor;

        produto.save().then((produtoAtualizado) => {
            return res.status(201).json({message: "Produto editado com sucesso!!!", produtoAtualizado:produtoAtualizado});
        }).catch((erro) => {
            return res.status(500).json({message: "Erro interno no servidor, erro: "+erro});
        })
    }).catch((erro) => {
        return res.status(500).json({message: "Erro interno no servidor, erro: "+erro});
    })
})

router.delete("/:id", auth.verificaUser, (req,res) => {
    Produto.deleteOne({_id: req.params.id}).then(() => {
        return res.status(200).json({message: "Produto deletado com sucesso!!!"});
    }).catch((erro) => {
        return res.status(500).json({message: "Erro interno no servidor, erro: "+erro});
    })
})

router.get("/", (req,res) => {
    Produto.find().then((produtos) => {
        return res.status(200).json(produtos);
    }).catch((erro) => {
        return res.status(500).json({message: "Erro interno no servidor, erro: "+erro});
    })
})

module.exports = router;