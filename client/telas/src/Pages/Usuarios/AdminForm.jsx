import React from "react";
import './AdminForm.css';
import Header from "../../Components/Header";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const CriarAdmin = () => {
    const urlApi = "http://localhost:3001";
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token) {
          toast.error("Faça login para utilizar o sistema");
          navigate("/login");
        }
    
        axios.get(`${urlApi}/usuarios/perfil`, {
          headers: {
            Authorization: token
          }
        }).then((resposta) => {
          if (resposta.data.isAdmin !== 1) {
            toast.error('Área permitida apenas para administradores');
            navigate('/');
          }
        }).catch((erro) => {
          toast.error("Faça login para utilizar o sistema");
          navigate("/login");
        })
    }, []);

    function adicionarAdmin(e) {
        e.preventDefault();

        const token = localStorage.getItem("token");

        axios.post(`${urlApi}/usuarios/admin`, {
            nomeUsuario: username,
            senha: senha
        }, {
            headers: {
                Authorization: token
            }
        }).then((resposta) => {
            toast.success(resposta.data.message);
            navigate("/admin");
        }).catch((erro) => {
            toast.error(erro.response.data.message);
        })
    }

    return (
        <>
            <Header />
            <div className="body">
                <div className="wrapper">
                    <form onSubmit={(e) => adicionarAdmin(e)}>
                        <h1>Criar Admin</h1>
                        <div className="input-box">
                            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Nome de usuário"/>
                        </div>
                    
                        <div className= "input-box">
                            <input onChange={(e) => setSenha(e.target.value)} type="password" placeholder='Senha'/>
                        </div>
                        <button type='submit'>Criar</button>
                    </form>
                </div>
            </div>
        </>
        
    );
};

export default CriarAdmin;