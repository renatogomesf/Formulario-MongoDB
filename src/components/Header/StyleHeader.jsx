import styled from "styled-components";


export const  Topo = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    width: 100%;
    max-width: 800px;
`

export const Logo = styled.div`
    font-weight: bold;
    font-size: 2rem;
`

export const Ul = styled.ul`
    display: flex;
    gap: 30px;

    .link{
        text-decoration: none;
        color: white;
    }
`

export const Li = styled.li`

    list-style: none;


    &:hover > hr{
        width: 100%;
        transition: 0.5s;
    }


    hr{
        border: none;
        width: 20%;
        height: 3px;
        background-color: ${({theme})=>theme.cor02};
        transition: 0.5s;
    }
`
