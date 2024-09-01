//Resume

import styled from "styled-components";

export const Container = styled.div`
    max-width: 1300px;
    height: 80px;
    width: 100%;
    border: none;
    outline: none;
    margin: 20px auto;
    display: flex;
    gap: 3%;
    margin-top: -50px;
    justify-content: space-around;
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: white;
    &:hover {
        background-color: #0056b3;
    }
`;
