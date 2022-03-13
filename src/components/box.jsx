import React from "react";
import styled from "styled-components";
import { Label } from "./label";



export const Box = props => {
    return(
        <BoxWrap>
            
            <Title>Planeta</Title>
            <Label atri="População" valor="2000" />
            <Label atri="Clima" valor="arido" />
            <Label atri="Terreno" valor="desert" />
            <Label films="8" />
            
        </BoxWrap>
    );
}

const BoxWrap = styled.div`
    border: 3px solid #FFE81E;
    background: #000;
    width 300px;
    padding-bottom: 20px;


`;
const Title = styled.h2`
    background: #FFE81F;
    color: #000;
    font-size: 1.6rem;
    padding: 3px 10px;
    text-align:center;
    margin-bottom:20px;
`;