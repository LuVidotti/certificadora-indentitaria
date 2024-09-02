import React from 'react';
import './AdminPage.css';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import axios from "axios";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => { 
  const urlApi = "http://localhost:3001";
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(!token) {
      toast.error("Faça login para utilizar o sistema");
      navigate("/login");
    }

    axios.get(`${urlApi}/usuarios`, {
      headers: {
        Authorization: token
      }
    }).then((resposta) => {
      setUsuarios(resposta.data);
    }).catch((erro) => {
      console.log(erro);
      toast.error(erro.response.data.message);
    })
  }, [usuarios]);

  function excluirUsuario(id) {
    const token = localStorage.getItem("token");

    axios.delete(`${urlApi}/usuarios/${id}`, {
      headers: {
        Authorization: token
      }
    }).then((resposta) => {
      toast.success(resposta.data.message);
    }).catch((erro)=> {
      toast.error(erro.response.data.message);
    })
  }

  return (
    <>
      <Header />
      <div className='admin'>
        <h1>Tela do administrador</h1>
        
        <div className="create-buttons">
          <Link to="/criar-usuario">Criar usuário</Link>
          <Link to="/criar-admin">Criar administrador</Link>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Deletar</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                  <tr key={usuario._id}>
                    <td>{usuario.nomeUsuario}</td>
                    <td>{usuario.isAdmin === 1 ? 'Administrador' : 'Comum'}</td>
                    <td className="delete-table">
                      <button onClick={() => excluirUsuario(usuario._id)} className="delete-button">Excluir</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default AdminPage;
