import styled from "styled-components";


export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Article = styled.article`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    align-items: center;
    margin: 30px 20px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0px 1px 32px black;

    hr{
        width: 100%;
    }
`

export const Title = styled.h1`
    text-align: center;
    margin-top: 30px;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
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

    &:focus{
        outline: 3px solid ${({theme})=>theme.cor04};
    }
`

export const Button = styled.button`
    /* width: 190px; */
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



export const Cadastros = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    margin: 10px;
`

export const Cadastro = styled.li`
    /* background-color: ${({theme})=>theme.cor06}; */
    color: black;
    /* border-radius: 5px; */
    list-style: none;
    display: flex;
    justify-content: end;
    /* flex-wrap: wrap; */
    /* gap: 10px; */
    width: 100%;


    @media (max-width: 700px) {
        /* flex-direction: column; */
        flex-wrap: wrap;
    }
`

export const Dados =  styled.div`
    background-color: ${({theme})=>theme.cor06};
    border-radius: 10px 0px 0px 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 5px;

    .id{
        background-color: ${({theme})=>theme.cor03};
        color: white;
    }

    @media (max-width: 700px) {
        border-radius: 10px 10px 0px 10px;
    }
`

export const Dado = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 5px;
    font-weight: 500;
`

export const Funcao = styled.div`
    background-color: ${({theme})=>theme.cor03};
    color: white;
    border-radius: 0px 10px 10px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 10px 20px;

    .btnUpdate,
    .btnDelete{
        font-size: 1.1rem;
        cursor: pointer;
        transition: 0.4s;
        background-color: transparent;
        border: none;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;

        &:hover{
            transform: scale(1.3);
            transition: 0.4s;
        }
    }

    @media (max-width: 700px) {
        border-radius: 0px 0px 10px 10px;
    }
`

export const TelaUpdate = styled.div`
    display: none;
    position: fixed;
    top: 0px;
    z-index: 100;
`


export const Popup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    position: fixed;
    left: -400px;
    bottom: 50px;
    color: black;
    font-weight: 500;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 1px 30px black;

    transition: 0.6s;

    p{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        .check{
            color: #00df00;
            font-size: 1.5rem;
        }

        .alert{
            color: #d0df00;
            font-size: 1.5rem;
        }

        .erro{
            color: #cc0000;
            font-size: 1.5rem;
        }
    }

    .barra{
        width: 0%;
        height: 7px;
        border: none;
        background-color: none;
        border-radius: 3.5px;

        animation-name: none;
        animation-duration: 3s;
        animation-fill-mode: forwards;
        animation-delay: 1s;
    }


    @keyframes barra {
        from{
            width: 0%;
        }

        to{
            width: 100%;
        }
    }
`