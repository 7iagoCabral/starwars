import React from "react";
import styled from "styled-components";

export const Label = props => {
    
    
        if(!props.films){

            return <LabelStyled >{props.atri}: {props.valor}</LabelStyled>
        }else{
            return <LabelStyledCenter >Apresentado em {props.films} filmes!</LabelStyledCenter>
        }
    
}

const LabelStyled = styled.div`
    padding: 20px 16px 0 16px;
    font-size: 1.1rem;
    
`;
const LabelStyledCenter = styled.div`
    padding: 20px 16px 0 16px;
    text-align: center;
    font-size: 1.1rem;
`;