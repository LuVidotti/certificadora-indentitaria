import Header from "../../Components/Header";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CriarDoacao() {
    const [tipo, setTipo] = useState("");
    const [doador, setDoador] = useState("");
    const [data, setData] = useState("");
    const [quantidade, setQuantidade] = useState(0);
    const urlApi = "http://localhost:3001";
    const navigate = useNavigate();

    function adicionarDoacao(e) {
        e.preventDefault();

        const token = localStorage.getItem("token");
        if(!token) {
            toast.error("Faça login para realizar esta ação");
            navigate("/login");
        }

        axios.post(`${urlApi}/doacoes`, {
            tipo: tipo,
            doador: doador,
            data: data,
            quantidade: quantidade
        }, {
            headers: {
                Authorization: token
            }
        }).then((resposta) => {
            console.log(resposta);
            toast.success(resposta.data.message);
        }).catch((erro) => {
            toast.error(erro.response.data.message);
        })
    }

    return (
        <>
            <Header />
            <div className='body-produto'>
                <div className = 'wrapper'>
                    <form onSubmit={(e) => adicionarDoacao(e)}>
                        <h1>Criar doação</h1>
                            <div className = "input-box">
                                <input onChange={(e) => setTipo(e.target.value)} type="text" placeholder='Tipo'/>
                            </div>
                            <div className= "input-box">
                                <input onChange={(e) => setDoador(e.target.value)} type="text" placeholder='Doador'/>
                            </div>
                            <div className= "input-box">
                                <input onChange={(e) => setData(e.target.value)} type="text" placeholder='Data'/>
                            </div>
                            <div className= "input-box">
                                <input onChange={(e) => setQuantidade(e.target.value)} type="number" placeholder='Quantidade'/>
                            </div>
                        <button type='submit'>Criar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CriarDoacao;