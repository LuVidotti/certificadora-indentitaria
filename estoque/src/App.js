import React, { useState } from "react"
import Global from "./styles/global"
import Header from "./components/Header"
import Resume from "./components/Resume"
import Form from "./components/Form";

const App = () => {
    const data = localStorage.getItem("transactions");

    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : []
    );

    const handleAdd = (transaction) => {
        const newArrayTransactions = [...transactionsList, transaction];

        setTransactionsList(newArrayTransactions);

        localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
    };

    return (
        <>
            <Header />
            <Resume />
            <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList} />
            <Global />
        </>
    );
};

export default App;