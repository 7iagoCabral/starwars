import React from "react";
import styled from "styled-components";
import GlobalStyled from "./components/global-styled";
import {Box} from "./components/box"
import {Button} from "./components/button"
import Api from "./components/api"

export const App = (props) => {
    return(
        
        <Container>
        <GlobalStyled />
        <Box />
        <Button name="NEXT" />
        <Api/>
        </Container>
        
        
    );
};
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;