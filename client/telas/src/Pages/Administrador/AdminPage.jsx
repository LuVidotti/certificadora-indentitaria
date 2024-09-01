import React from 'react';
import './AdminPage.css';

const AdminPage = () => { return (
    <div className="wrapper">
      <h1>Tela do administrador</h1>
      
      <div className="create-buttons">
        <button>Criar usuário</button>
        <button>Criar administrador</button>
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
  );
}
export default AdminPage;
