import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Navbar} from "./Componentes/Navbar";
import {Content} from "./Componentes/Content";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Content/>
      <Navbar/>
      <App />

  </React.StrictMode>
)
