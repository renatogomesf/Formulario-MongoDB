import styled from "styled-components";


export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
`

export const Title = styled.h1`
    text-align: center;
    margin-top: 20px;
`

export const Form = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    padding: 10px;
    border-radius: 15px;
    background-color: white !important;
    box-shadow: 0px 1px 32px black;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    padding: 10px;
`

export const Botoes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 10px;
    padding: 10px;
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`

`

export const Input = styled.input`
    width: 250px;
    max-width: 250px;
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 10px;

    background-color: rgba(128, 128, 128, 0.2);

    &:focus{
        outline: 3px solid ${({theme})=>theme.cor04};
    }
`

export const Button = styled.button`
    width: 130px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
    background-color: ${({theme})=>theme.cor03};
    color: white;

    &:hover{
        transform: scale(1.1);
        transition: 0.3s;
    }
`
