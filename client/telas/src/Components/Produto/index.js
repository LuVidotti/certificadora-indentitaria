import "./Produto.css";

function Produto({ nome, tipo, validade, quantidade, fornecedor, id }) {
    return (
        <div className="produto-card">
            <div className="produto-dados">
                <p><strong>Nome:</strong> {nome}</p>
                <p><strong>Tipo:</strong> {tipo}</p>
                <p><strong>Data de validade:</strong> {validade}</p>
                <p><strong>Quantidade:</strong> {quantidade}</p>
                <p><strong>Fornecedor:</strong> {fornecedor}</p>
            </div>
            <button className="botao-excluir">Excluir</button>
        </div>
    )
}

export default Produto;