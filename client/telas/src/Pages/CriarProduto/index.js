import { toast } from "react-toastify";
import Header from "../../Components/Header";
import "./CriarProduto.css";
import axios from "axios";
import { useState } from "react";

function CriarProduto() {
    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("");
    const [dataValidade, setDataValidade] = useState("");
    const [fornecedor, setFornecedor] = useState("");
    const [quantidade, setQuantidade] = useState(0);
    const urlApi = "http://localhost:3001";

    function adicionarProduto(e) {
        e.preventDefault();

        const token = localStorage.getItem("token");

        axios.post(`${urlApi}/produtos`, {
            nome: nome,
            tipo: tipo,
            dataValidade: dataValidade,
            fornecedor: fornecedor,
            quantidade: quantidade
        }, {
            headers: {
                Authorization: token
            }
        }).then((resposta) => {
            console.log(resposta);
            toast.success(resposta.data.message);
        }).catch((erro) => {
            console.log(erro);
            toast.error(erro.response.data.message)
        })
    }

    return(
        <>
            <Header />
            <div className='body-produto'>
                <div className = 'wrapper'>
                    <form onSubmit={(e) => adicionarProduto(e)}>
                        <h1>Criar produto</h1>
                            <div className = "input-box">
                                <input onChange={(e) => setNome(e.target.value)} type="text" placeholder='Nome'/>
                            </div>
                            <div className= "input-box">
                                <input onChange={(e) => setTipo(e.target.value)} type="text" placeholder='Tipo'/>
                            </div>
                            <div className= "input-box">
                                <input onChange={(e) => setDataValidade(e.target.value)} type="text" placeholder='Data de validade'/>
                            </div>
                            <div className= "input-box">
                                <input onChange={(e) => setFornecedor(e.target.value)} type="text" placeholder='Fornecedor'/>
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

export default CriarProduto;