import Header from "../../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import Produto from "../../Components/Produto";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Home() {
    const urlApi = "http://localhost:3001";
    const [produtos, setProdutos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token) {
            toast.error("Faça login para utilizar o sistema");
            navigate('/login');
        }

        axios.get(`${urlApi}/produtos`, {
            headers: {
                Authorization: token
            }
        }).then((resposta) => {
            setProdutos(resposta.data)
        }).catch((erro) => {
            console.log(erro);
        })
    }, [produtos]);

    return (
        <>
            <Header />
            <div className="home">
                <h2>Produtos</h2>
                <Link to="/criar-produto">Criar Produto</Link>
                <div className="lista-produtos">
                    {
                        produtos.map((produto) => <Produto key={produto._id} nome={produto.nome} tipo={produto.tipo} validade={produto.dataValidade} fornecedor={produto.fornecedor} quantidade={produto.quantidade} id={produto._id}/>)
                    }
                </div>
            </div>
        </>
    )
}

export default Home;