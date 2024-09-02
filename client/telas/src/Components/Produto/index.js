import { toast } from "react-toastify";
import "./Produto.css";
import axios from "axios";

function Produto({ nome, tipo, validade, quantidade, fornecedor, id }) {
    const urlApi = "http://localhost:3001";

    function excluirProduto() {
        const token = localStorage.getItem("token");

        axios.delete(`${urlApi}/produtos/${id}`, {
            headers: {
                Authorization: token
            }
        }).then((resposta) => {
            console.log(resposta);
            toast.success(resposta.data.message);
        }).catch((erro) => {
            console.log(erro);
            toast.error(erro.response.data.message);
        })
    }

    return (
        <div className="produto-card">
            <div className="produto-dados">
                <p><strong>Nome:</strong> {nome}</p>
                <p><strong>Tipo:</strong> {tipo}</p>
                <p><strong>Data de validade:</strong> {validade}</p>
                <p><strong>Quantidade:</strong> {quantidade}</p>
                <p><strong>Fornecedor:</strong> {fornecedor}</p>
            </div>
            <button onClick={excluirProduto} className="botao-excluir">Excluir</button>
        </div>
    )
}

export default Produto;