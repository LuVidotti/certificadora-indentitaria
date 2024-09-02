import React from "react";
import './AdminForm.css';
import Header from "../../Components/Header";

const CriarAdmin = () => {
    return (
        <>
            <Header />
            <div className="body">
                <div className="wrapper">
                    <form action="">
                        <h1>Criar Admin</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Nome de usuário"/>
                        </div>
                    </form>
                    <form action="">
                            <div className= "input-box">
                                <input type="password" placeholder='Senha'/>
                            </div>
                        </form>
                        <button type='submit'>Criar</button>
                </div>
            </div>
        </>
        
    );
};

export default CriarAdmin;