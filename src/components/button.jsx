import React from "react";
import styled from "styled-components";


export const Button = props => {

    
    return(
        <ButtonStyled onClick={props.onClick}>{props.name}</ButtonStyled>
    );
}
const ButtonStyled = styled.button`
    padding: 6px;
    margin: 10px 10px;
    display:flex;
    background: transparent;
    color: #fff;
    font-family: 'Trispace', sans-serif;
    font-size 1.2rem;
    border:0;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
  
`;
