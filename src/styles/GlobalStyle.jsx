import { createGlobalStyle } from "styled-components";


export const GlobalStyle =  createGlobalStyle`
    
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    html{
        height: 100%;
    }

    body{
        min-height: 100%;
        display: flex;
        flex-direction: column;
        background-color: ${({theme})=>theme.cor01};
        color: ${({theme})=>theme.cor06};
        position: relative !important;
    }

    ::-webkit-scrollbar{
        background-color: ${({theme})=>theme.cor03};
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: white;
        border-radius: 5px;
    }

    .app{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
`