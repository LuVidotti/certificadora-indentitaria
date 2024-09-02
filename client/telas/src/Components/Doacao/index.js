import { toast } from "react-toastify";
import "./Doacao.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Doacao({ tipo, quantidade, data, doador, id }) {
    const urlApi = "http://localhost:3001";
    const navigate = useNavigate();

    function excluirDoacao() {
        const token = localStorage.getItem("token");

        if(!token) {
            toast.error("Faça login para realizar esta ação");
            navigate("/login");
        }

        axios.delete(`${urlApi}/doacoes/${id}`, {
            headers: {
                Authorization: token
            }
        }).then((resposta) => {
            toast.success(resposta.data.message);
        }).catch((erro) => {
            toast.error(erro.response.data.message);
        })
    }

    return (
        <div className="doacao-card">
            <div className="doacao-dados">
                <p><strong>Tipo:</strong> {tipo}</p>
                <p><strong>Data:</strong> {data}</p>
                <p><strong>Quantidade:</strong> {quantidade}</p>
                <p><strong>Doador:</strong> {doador}</p>
            </div>
            <button onClick={excluirDoacao} className="botao-excluir">Excluir</button>
        </div>
    )
}

export default Doacao;