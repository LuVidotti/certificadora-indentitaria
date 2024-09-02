import React from 'react';
import './AdminPage.css';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';

const AdminPage = () => { return (
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
                <tr>
                  <td>Tatu</td>
                  <td>Comum</td>
                  <td className="delete-table">
                    <button className="delete-button">Excluir</button>
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default AdminPage;
