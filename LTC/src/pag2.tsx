import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Navbar} from "./Componentes/Navbar";
import {Conteudo} from "./Cursos/Conteudo";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Conteudo/>
        <Navbar/>

    </React.StrictMode>
)
