import React, {useState} from "react";
import styled from "styled-components";
import GlobalStyled from "./components/global-styled";
import {Box} from "./components/box"
import {Button} from "./components/button"


export const App = (props) => {
    const [id, setId] = useState(0);
    const [buttonText, setButtonText] = useState("NEXT");

    const randomNumber = () => {
        const  num = parseInt(Math.random() * (60 - 1) + 1);
        setId(num)
    }
    
    return(
        
        <Container>
        <GlobalStyled />
        <Box numero={id} setButtonText={setButtonText} />
        <Button onClick={()=> randomNumber()} name={buttonText} />
        
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