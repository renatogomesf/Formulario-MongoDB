import axios from "axios"
import { useEffect } from "react"

import { Div, Status } from "./StyleTimer"

import { FaCheckCircle } from "react-icons/fa";


export default function Timer() {

    const handleTimertShow = ()=> {
        const timer = document.querySelector(".timer")
        timer.style.display = 'flex'
    }

    const handleTimertHidden = ()=> {
        const timer = document.querySelector(".timer")
        timer.style.display = 'none'
    }

    const handleStatustShow = ()=> {
        const status = document.querySelector(".status")
        status.style.display = 'flex'
    }

    const handleStatustHidden = ()=> {
        const status = document.querySelector(".status")
        status.style.display = 'none'
    }

    const handleTodosCadastros = async () => {

        await axios.get('https://api-formulario-mongodb.onrender.com/formulario/ligar-servidor')
        .then((response)=>{
            if(response.status == 200){
                handleTimertHidden()
                handleStatustShow()
                setTimeout(handleStatustHidden,5000)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }


    useEffect(()=>{
        handleTimertShow()
        handleTodosCadastros()
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