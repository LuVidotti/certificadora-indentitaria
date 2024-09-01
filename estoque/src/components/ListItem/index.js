import React from "react";
import * as C from "./styles";
import {
    FaRegArrowAltCircleUp,
    FaTrash,
} from "react-icons/fa";

const ListItem = ({ item, onIconClick, onDelete }) => {
    return (
        <C.Tr>
            <C.Td>{item.desc}</C.Td>
            <C.Td>{item.amount}</C.Td>
            <C.Td>{item.type}</C.Td>
            <C.Td>{item.date}</C.Td>
            <C.Td alignCenter>
                {item.expense ? "Doação" : "Produto"}
            </C.Td>
            <C.Td alignCenter>
                <FaRegArrowAltCircleUp color="green" onClick={() => onIconClick(item.id)} />
                <C.Space />
                <FaTrash onClick={() => onDelete(item.id)} />
            </C.Td>
        </C.Tr>
    );
};

export default ListItem;
