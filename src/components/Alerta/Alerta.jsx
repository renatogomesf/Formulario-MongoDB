
// IMPORTE DE BIBLIOTECAS
import { useEffect } from "react";


// IMPORTE DAS TAGS ESTILIZADAS
import { Button, Wrapper } from "./StyleAlerta"


// IMPORTE DE ICONES DO REACT-ICONS
import { FaExternalLinkAlt } from "react-icons/fa";


export default function Alerta() {


    // FUNÇÕES PARA MOSTRAR E ESCONDER O ALERTA
    const handleAlertShow = ()=> {
        const alerta = document.querySelector(".alerta")
        alerta.style.display = 'flex'
    }
    const handleAlertHidden = ()=> {
        const alerta = document.querySelector(".alerta")
        alerta.style.display = 'none'
    }


    // useEffect PARA MOSTRAR O ALERTA ASSIM QUE O APP É ABERTO
    useEffect(()=>{
        handleAlertShow()
    },[])


    return (
        <>
            <Wrapper className="alerta">
                <h1>Importante!</h1>
                <p>
                    Como a API utilizada nesse projeto foi hospedada no <strong><a href="https://render.com/" target="blank">render <FaExternalLinkAlt  className="link"/></a></strong> e utilizado o plano gratuito, caso não haja atividades de requisição ou resposta, o servidor é <strong>suspenso/desativado</strong>.
                </p>
                <p>
                    Com isso, para <strong>reativar o servidor</strong>, é necessário alguma atividade de consumo de api e este formulário sempre faz uma requisição ao ser aberto. 
                </p>
                <p>
                    Após a requisição, pode levar por volta de <strong>50 segundos ou mais</strong> para que o formulário esteja totalmente usável e se comunicando com o banco de dados.
                </p>
                <div>
                    <strong>Agradeço a compreensão!</strong>
                </div>
                <Button onClick={handleAlertHidden}>Entendido!</Button>
            </Wrapper>
        </>
    )
}