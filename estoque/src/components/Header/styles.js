//header

import styled from "styled-components";

export const Container = styled.div`
    height: 150px; 
    text-align: center;
    background-color: 	#2F4F4F;
`;

export const Header = styled.h1``;

export const Title = styled.div`
    padding-top: 20px;
    color: #fff;
`;

export const LogoutButton = styled.button`
    background-color: white;
    color: black;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    position: absolute;
    top: 30px;
    right: 20px;
    &:hover {
        background-color: #cc0000;
    }
`;

export const ProfileButton = styled.button`
    background-color: white;
    color: black;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    position: absolute;
    top: 85px;
    right: 20px;
    &:hover {
        background-color: #cc0000;
    }
`;