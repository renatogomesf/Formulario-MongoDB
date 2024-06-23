import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// IMPORTAÇÕES DO STYLED-COMPONENTS
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle.jsx'
import { theme } from './styles/theme.jsx'


// IMPORTAÇÃO DO REACT-ROUTER-DOM
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
