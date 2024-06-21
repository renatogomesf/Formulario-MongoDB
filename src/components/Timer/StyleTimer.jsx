import styled from "styled-components";

export const Div = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 10px;

    background-color: white;
    color: black;
    font-weight: bold;
    width: 200px;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    box-shadow: 0px 0px 40px black;


    div{
        border: 1px solid black;
        width: 101%;
        height: 12px;
        border-radius: 6px;
    }

    span::before{
        content: '';
        width: 80%;
        height: 10px;
        position: absolute;
        left: 20px;
        background-color: ${({theme})=>theme.cor02};
        border-radius: 5px;

        animation: loading 70s linear;
    }

    @keyframes loading {
        from{
            width: 0%;
        }
        to{
            width: 80%;
        }
    }
`

export const Status = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 10px;

    background-color: white;
    color: black;
    font-weight: bold;
    width: 200px;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    box-shadow: 0px 0px 40px black;

    p{
        display: flex;
        align-items: center;
        gap: 10px;

        .check{
            font-size: 25px;
            color: ${({theme})=>theme.cor02};
        }
    }
`