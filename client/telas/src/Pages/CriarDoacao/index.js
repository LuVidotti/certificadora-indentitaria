import Header from "../../Components/Header";

function CriarDoacao() {
    return (
        <>
            <Header />
            <div className='body-produto'>
                <div className = 'wrapper'>
                    <form>
                        <h1>Criar doação</h1>
                            <div className = "input-box">
                                <input type="text" placeholder='Tipo'/>
                            </div>
                            <div className= "input-box">
                                <input type="text" placeholder='Doador'/>
                            </div>
                            <div className= "input-box">
                                <input type="text" placeholder='Data'/>
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

export default CriarDoacao;