//ResumeItem

import React from "react";
import * as C from "./styles";

const ResumeItem = ({ title }) => {
    return (
        <C.Container>
            <C.Header>
                <C.HeaderTitle>
                    {title}
                </C.HeaderTitle>
            </C.Header>
        </C.Container>
    );
};

export default ResumeItem