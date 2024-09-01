//Resume

import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";

const Resume = () => {
    return (
        <C.Container>
            <ResumeItem title="Estoque de Produtos" />
            <ResumeItem title="Estoque de Doações" />
        </C.Container>
    );
};

export default Resume;