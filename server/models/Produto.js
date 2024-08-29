const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Produto = new Schema({
    nome: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number
    },
    dataValidade: {
        type: String
    },
    fornecedor: {
        type: String
    }
})

mongoose.model("produtos", Produto);