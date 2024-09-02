import React from "react";
import './ComumForm.css';
import Header from "../../Components/Header";

const CriarComum = () => {
    return (
        <>
            <Header />
            <div className="body">
                <div className="wrapper">
                    <form action="">
                        <h1>Criar usuário</h1>
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

export default CriarComum;