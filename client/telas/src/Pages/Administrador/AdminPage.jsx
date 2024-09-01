import React from 'react';
import './AdminPage.css';

const AdminPage = () => { return (
    <div className="wrapper">
      <h1>Tela do administrador</h1>
      
      <div className="create-buttons">
        <button>Create User</button>
        <button>Create Admin</button>
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
                <td>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AdminPage;
