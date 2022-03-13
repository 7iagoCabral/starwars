import React, {useState} from "react";
import styled from "styled-components";
import { Label } from "./label";
import Api from "./api";
import { useEffect } from "react";


export const Box = ({setButtonText, ...props}) => {
    console.log(props);
    console.log(setButtonText);
    const [planet, setPlanet] = useState({name:' ', population:'', climate:'', terrain:'', films:[]});
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if(props.numero !== 0){
            setLoading(true);
            setButtonText && setButtonText("LOADING");
            Api.get(`/planets/${props.numero}?format=json`)
            .then((response) => {
                setPlanet(response.data);
                setLoading(false);
                setButtonText && setButtonText("NEXT");
            })
            .catch((err) => {
                console.log("Errrrouuuu");
                setButtonText && setButtonText("NEXT");
                setLoading(false);
            })
        }

    },[props.numero]);

    if(loading) {
        return <div> Loading </div>;
    }

    return(
        <BoxWrap>
            <Title>{planet.name}</Title>
            <Label atri="População" valor={planet.population} />
            <Label atri="Clima" valor={planet.climate} />
            <Label atri="Terreno" valor={planet.terrain} />
            <Label films={planet.films.length} />
            
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
    height: 35px;
`;