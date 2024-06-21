import Header from "./components/Header/Header"
import Formulario from "./pages/cadastro/Formulario"
import Consulta from "./pages/consulta/Consulta"
import Footer from "./components/Footer/Footer"
import Alerta from "./components/Alerta/Alerta"
import Timer from "./components/Timer/Timer"

import styled from "styled-components"

import { Routes, Route } from "react-router-dom"


window.addEventListener("mousemove",(event)=>{
  let span = document.querySelector(".move")

  span.style.top = `${event.clientY}px`
  span.style.left = `${event.clientX}px`
  span.style.display = "block"
})


window.addEventListener("mouseout",()=>{
  let span = document.querySelector(".move")
  span.style.display = "none"
})


export const Span = styled.span`
  position: fixed;
  top: 20px;
  left: 20px;
  box-shadow: 0px 0px 700px 100px #19cf5373;
  z-index: -1000;
  transform: translate(-50%, -50%);

  @media (max-width: 700px) {
    box-shadow: 0px 0px 0px 0px ;
  }
`


function App() {

  return (
    <>
      <div className="app"> 
        <Header></Header>
        <main>
          <Routes className="main">
            <Route path="/Formulario-MongoDB" element={<Formulario/>}/>
            <Route path="/Consultar" element={<Consulta/>}/>
          </Routes>
        </main>
        <Footer></Footer>
      </div>
      <Span className="move"></Span>
      <Alerta></Alerta>
      <Timer></Timer>
    </> 
  )
}

export default App
