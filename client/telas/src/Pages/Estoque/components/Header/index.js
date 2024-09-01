//header

import React from "react";
import * as C from "./styles";

const Header = () => {
    return (
        <C.Container>
            <C.Header>
                <C.Title>Bons Fluidos</C.Title>
                <C.LogoutButton>Sair</C.LogoutButton>
            </C.Header>
        </C.Container>
    );
};

export default Header;