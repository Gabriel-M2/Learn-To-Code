import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Navbar} from "./Componentes/Navbar";
import {Video} from "./Cursos/Video";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Video/>
        <Navbar/>

    </React.StrictMode>
)
