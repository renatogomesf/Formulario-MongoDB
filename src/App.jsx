
// IMPORTAÇÃO DE COMPONENTES E PAGINAS
import Header from "./components/Header/Header"
import Formulario from "./pages/cadastro/Formulario"
import Consulta from "./pages/consulta/Consulta"
import Footer from "./components/Footer/Footer"
import Alerta from "./components/Alerta/Alerta"
import Timer from "./components/Timer/Timer"


// IMPORTAÇÃO DO STYLED-COMPONENTS
import styled from "styled-components"


// IMPORTAÇÕES DO REACT-ROUTER-DOM
import { Routes, Route } from "react-router-dom"


// FUNÇÃO QUE OBISERVA O EVENTO DE MOVIMENTO DO MOUSE NA TELA
window.addEventListener("mousemove",(event)=>{
  let span = document.querySelector(".move")
  span.style.top = `${event.clientY}px`
  span.style.left = `${event.clientX}px`
  span.style.display = "block"
})


// FUNÇÃO QUE OBISERVA O EVENTO DE SAIDA DO MOUSE DA TELA
window.addEventListener("mouseout",()=>{
  let span = document.querySelector(".move")
  span.style.display = "none"
})


// CRIAÇÃO E ESTILIZAÇÃO DE UMA TAG SPAN
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

          {/* ORGANIZAÇÃO DO QUE VAI SER RENDERIZADO EM TELA A DEPENDER DA ROTA */}
          <Routes className="main">
            <Route path="/Formulario-MongoDB" element={<Formulario/>}/>
            <Route path="/Consultar" element={<Consulta/>}/>
          </Routes>
          
        </main>
        <Footer></Footer>
      </div>

      {/* SPAN QUE FICA GRUDADO NO MOUSE PRA DAR O EFEITO DE "LUZ" */}
      <Span className="move"></Span>

      {/* POPUPS QUE APARECEM AO ABRIR A TELA */}
      <Alerta></Alerta>
      <Timer></Timer>
    </> 
  )
}

export default App
