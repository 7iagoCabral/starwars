import React from "react";
import styled from "styled-components";

export const Label = ({ films, atri, valor }) => {
     
        const text = films === undefined? `${atri}: ${valor}` : `Apresentado em ${films} filmes!`;
        return <LabelStyled center={films}>{text}</LabelStyled>    
    
}

const LabelStyled = styled.div`
    padding: 20px 16px 0 16px;
    font-size: 1.1rem;
    text-align: ${props => props.center? 'center' : 'left'}
    
`;
