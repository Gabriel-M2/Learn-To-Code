import { useState } from 'react'
import './App.css'
import  './global.css'
import {Navbar} from "./Componentes/Navbar";
import {MapPin} from "phosphor-react";
import dev from './Assets/dev.svg'



function App() {

  return (



    <div className="App">
        <div className="flex  justify-center">

                <span id="text1" className="text-zinc-300 absolute top-[55rem] inter2:top-[50rem] sm:top-[40rem] text-3xl sm:text-5xl sm:flex typewriter ">
                    O QUE OFERECEMOS <span className="text-orange-500 animate-bounce text-indigo-500 ml-4 py-1">?</span>
                </span>

        </div>

        <div className="absolute mt-10 top-[60rem] sm:ml-24 p-4 group extra:flex extra:justify-center ">
                <span className="text-zinc-300  text-[1.2rem] medium:text-4xl flex">
                    Melhorar sua Lógica <MapPin size={32} color="#6366f1" className="ml-4 sm:mt-1 group-hover:animate-bounce" />
                </span>
        </div>

        <div className="absolute top-[70rem] w-screen  extra:flex extra:justify-center legenda:flex ">
            {/*<img src={mapa} alt="" className="w-[40rem] sm:ml-10 inter:ml-[7rem] rounded-md border-2 border-zinc-600 " />*/}

            <div className="flex-col sm:ml-20 mr-10 break:ml-0">
                <span className="text-zinc-300   sm:text-xl break:text-4xl font-roboto relative top-10 left-6 break:ml-10   "> A lógica é algo essencial para o desenvolvimento !  </span>
                <div className="ml-6 break:ml-16 extra:w-[32rem]  break:w-[50rem]">
                    <span className="relative top-20 text-sm text-zinc-400 break-word ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                </div>

                <img src={dev} className={"max-w-[40%] invisible legenda:visible relative w-[25rem]  -top-[10rem]  left-[70rem] "} alt=""/>

            </div>
        </div>


    </div>
  )
}

export default App
