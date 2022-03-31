import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './global.css'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Header from './components/Header'
import CSSBaseline from './components/CSSBaseline'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Header />
      <CSSBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
