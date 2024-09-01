//ListItem

import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
  padding: 10px; /* Adiciona espaço interno à célula */
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-word; 
  min-width: 150px; 
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Space = styled.div`
  width: 10px; 
`;
