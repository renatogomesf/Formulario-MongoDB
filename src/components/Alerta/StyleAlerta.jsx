import styled from "styled-components";

export const Wrapper = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: absolute;
    top: 10%;
    left: calc(50% - 300px);
    background-color: white;
    color: black;
    max-width: 600px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 30px black;

    h1{
        color: red;
    }

    a{
        display: inline-flex;
        align-items: center;
        gap: 5px;
        text-decoration: none;
        color: black;
        transition: 0.4s;

        .link{
            width: 10px;
        }

        &:hover{
            transform: translateY(-6px);
        }
    }

    @media (max-width: 649px) {
        max-width: 300px;
        left: calc(50% - 150px);
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
    background-color: ${({theme})=>theme.cor02};
    color: white;

    &:hover{
        transform: scale(1.1);
        transition: 0.3s;
    }
`