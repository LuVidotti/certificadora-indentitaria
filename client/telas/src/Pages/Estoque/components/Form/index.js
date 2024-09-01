import React, { useState } from "react";
import * as C from "./styles";
import List from "../List";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount || !type || !date) {
            alert("Informe todos os campos!");
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            type: type,
            date: date,
            expense: isExpense,
        };

        handleAdd(transaction);

        setDesc("");
        setAmount("");
        setType("");
        setDate("");
    };

    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Fornecedor</C.Label>
                    <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </C.InputContent>
                <C.InputContent>
                    <C.Label>Quantidade</C.Label>
                    <C.Input
                        value={amount}
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </C.InputContent>
                <C.InputContent>
                    <C.Label>Tipo</C.Label>
                    <C.Input value={type} onChange={(e) => setType(e.target.value)} />
                </C.InputContent>
                <C.InputContent>
                    <C.Label>Data</C.Label>
                    <C.Input
                        value={date}
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                    />
                </C.InputContent>
                <C.RadioGroup>
                    <C.Input
                        type="radio"
                        id="rIncome"
                        defaultChecked
                        name="group1"
                        onChange={() => setExpense(!isExpense)}
                    />
                    <C.Label htmlFor="rIncome">Produto</C.Label>
                    <C.Input
                        type="radio"
                        id="rExpenses"
                        name="group1"
                        onChange={() => setExpense(!isExpense)}
                    />
                    <C.Label htmlFor="rExpenses">Doação</C.Label>
                </C.RadioGroup>
                <C.Button onClick={handleSave}>ADICIONAR</C.Button>
            </C.Container>
            <List itens={transactionsList} setItens={setTransactionsList} />
        </>
    );
};

export default Form;