//ResumeItem

import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    padding: 5px 15px;
    width: 46%;

    @media (max-width: 720px) {
        width: 46%;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    gap: 10px;
`;

export const HeaderTitle = styled.p`
    font-size: 20px;`;
