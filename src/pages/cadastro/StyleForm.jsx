import styled from "styled-components";


export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h1`
    text-align: center;
    margin: 30px 0;
`

export const Form = styled.form`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px 20px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    margin: 50px 0px;
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


    .loading{
        font-size: 1.7rem;
        animation: loading 1s infinite linear;
    }


    @keyframes loading {
        from{
            transform: rotate(0deg);
        }

        to{
            transform: rotate(360deg);
        }
    }
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