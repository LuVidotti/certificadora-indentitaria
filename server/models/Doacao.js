const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Doacao = new Schema({
    tipo: {
        type: String
    },
    quantidade: {
        type: Number
    },
    data: {
        type: String
    },
    doador: {
        type: String
    }
});

mongoose.model("doacoes", Doacao);