import Header from "../../Components/Header";
import "./CriarProduto.css";

function CriarProduto() {
    return(
        <>
            <Header />
            <div className='body-produto'>
                <div className = 'wrapper'>
                    <form>
                        <h1>Criar produto</h1>
                            <div className = "input-box">
                                <input type="text" placeholder='Nome'/>
                            </div>
                            <div className= "input-box">
                                <input type="text" placeholder='Tipo'/>
                            </div>
                            <div className= "input-box">
                                <input type="text" placeholder='Data de validade'/>
                            </div>
                            <div className= "input-box">
                                <input type="text" placeholder='Fornecedor'/>
                            </div>
                            <div className= "input-box">
                                <input type="number" placeholder='Quantidade'/>
                            </div>
                        <button type='submit'>Criar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CriarProduto;