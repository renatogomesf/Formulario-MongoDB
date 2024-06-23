
// IMPORTE DE BIBLIOTECAS
import axios from "axios"
import { useEffect } from "react"


// IMPORTE DAS TAGS ESTILIZADAS
import { Div, Status } from "./StyleTimer"


// IMPORTE DE ICONES DO REACT-ICONS
import { FaCheckCircle } from "react-icons/fa";


export default function Timer() {


    // FUNÇÕES PARA MOSTRAR E ESCONDER O TIMER
    const handleTimertShow = ()=> {
        const timer = document.querySelector(".timer")
        timer.style.display = 'flex'
    }
    const handleTimertHidden = ()=> {
        const timer = document.querySelector(".timer")
        timer.style.display = 'none'
    }


    // FUNÇÕES PARA MOSTRAR E ESCONDER O STATUS
    const handleStatustShow = ()=> {
        const status = document.querySelector(".status")
        status.style.display = 'flex'
    }
    const handleStatustHidden = ()=> {
        const status = document.querySelector(".status")
        status.style.display = 'none'
    }


    // FUNÇÃO QUE FAZ UM GET SEM RETORNO SOMENTE PARA LIGAR O SERVIDOR
    const handleLigarServidor = async () => {
        await axios.get('https://api-formulario-mongodb.onrender.com/formulario/ligar-servidor')
        .then((response)=>{
            if(response.status == 200){
                handleTimertHidden()
                handleStatustShow()
                setTimeout(handleStatustHidden,4000)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }


    // useEffect PARA MOSTRAR O TIMER E REALIZAR O GET ASSIM QUE O APP É ABERTO
    useEffect(()=>{
        handleTimertShow()
        handleLigarServidor()
    },[])


    return (
        <>
            <Div className="timer">
                <p>Ligando servidor...</p>
                <div>
                    <span></span>
                </div>
            </Div>
            <Status className="status">
                <p>Tudo ok! <FaCheckCircle className="check"/></p>
                <p>Servidor rodando.</p>
            </Status>
        </>
    )
}