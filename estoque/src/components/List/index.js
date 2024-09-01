import React from "react";
import ListItem from "../ListItem";
import * as C from "./styles";

const List = ({ itens, setItens }) => {
    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    };

    return (
        <C.Table>
            <C.Thead>
                <C.Tr>
                    <C.Th width={30}>Fornecedor</C.Th>
                    <C.Th width={20}>Quantidade</C.Th>
                    <C.Th width={20}>Tipo</C.Th>
                    <C.Th width={20}>Data</C.Th>
                    <C.Th width={10} alignCenter>Origem</C.Th>
                </C.Tr>
            </C.Thead>
            <C.Tbody>
                {itens?.map((item, index) => (
                    <ListItem key={index} item={item} onDelete={onDelete} />
                ))}
            </C.Tbody>
        </C.Table>
    );
};

export default List;
