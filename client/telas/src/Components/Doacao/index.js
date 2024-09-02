import "./Doacao.css";

function Doacao({ tipo, quantidade, data, doador, id }) {
    return (
        <div className="doacao-card">
            <div className="doacao-dados">
                <p><strong>Tipo:</strong> {tipo}</p>
                <p><strong>Data:</strong> {data}</p>
                <p><strong>Quantidade:</strong> {quantidade}</p>
                <p><strong>Doador:</strong> {doador}</p>
            </div>
            <button className="botao-excluir">Excluir</button>
        </div>
    )
}

export default Doacao;