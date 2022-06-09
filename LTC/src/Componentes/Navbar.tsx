import { Popover } from "@headlessui/react";
import {Book, Bus, CaretUp, ChatDots, List, Monitor, UserCircle} from "phosphor-react";
import {Links} from "./Links";


export function Navbar(){
    return(
        <nav className="bg-zinc-800 w-screen flex h-16 sm:h-20 items-center drop-shadow-lg  text-zinc-100  ">


            <div id={"logo"} className="text-zinc-200 text-2xl font-serif ml-4 tracking-wide flex group hover:cursor-pointer">
                          <Monitor size={30} color="#ffffff" className="monitor mt-0.5 mx-2 ml-0" />
                        <span className="">
                        LTC
                 </span>
                        </div>

            <div className="absolute top-2 right-2">
                <Links />
            </div>

            <div className="sm:hidden flex items-center">

                <Popover className="">
                    {/* bg-zinc-800 absolute top-24 right-4 p-5 rounded-xl */}
                    <Popover.Panel className="bg-zinc-800 absolute top-24 right-4 p-5 rounded-xl z-10 " >
                        <span className="flex m-2 items-center  p-3  px-5 rounded-xl group hover:bg-indigo-500 transition-all ease-in-out delay-150  cursor-pointer border-2 border-indigo-500">
                        SOBRE-NÓS<Bus className="w-6 h-6 ml-3" />

                        </span>
                        <span className="
                            flex m-2
                            p-3 my-4 px-5
                            rounded-xl
                            cursor-pointer
                            border-2
                            border-indigo-500
                            group
                            overflow-hidden
                            flex-col
                            max-h-12
                            transition-all ease-in-out delay-450
                            hover:max-h-max
                        ">
                            <div className="flex">
                                SERVIÇOS
                                <CaretUp  className="w-6 h-6 group-hover:rotate-180 hover:transition-all ease-in-out delay-150 ml-8" />
                                </div>

                                <div className="flex flex-col pt-5  ">

                                <span className="hover:text-zinc-400 cursor-pointer py-2 transition-all">
                                    Cursos
                                </span>

                                <span className="hover:text-zinc-400 cursor-pointer py-2 transition-all">
                                    Certificações
                                </span>

                                <span className="hover:text-zinc-400 cursor-pointer py-2 transition-all">
                                    Colabore
                                </span>

                                </div>
                        </span>
                        <span className="flex m-2  items-center p-3  px-5 rounded-xl hover:bg-indigo-500 transition-all ease-in-out delay-150  cursor-pointer border-2 border-indigo-500">
                            CONTATE-NOS <ChatDots className="w-6 h-6 ml-3" />
                        </span>
                    </Popover.Panel>

                    <Popover.Button className="absolute top-4  right-2" >
                        <List className= "w-10 h-10 " />
                    </Popover.Button>
                </Popover>

            </div>


        </nav>

        // <div>
        //     <nav className="bg-zinc-800  w-screen h-20 flex items-center">
        //
        //
        //         <div className={"absolute right-10 flex space-x-4 "}>
        //
        //             <div className=" flex group hover:cursor-pointer group-hover:right-11 " >
        //                 <ChatDots color={"#ffffff"} className={"w-6 h-6 ml-3"} /> <span className="text-zinc-200 px-4 font-poppins group">CURSOS</span>
        //             </div>
        //
        //             <div className=" flex group hover:cursor-pointer" >
        //                 <Book className="w-6 h-6" color="#ffffff" /> <span className="text-zinc-200 px-4  font-poppins">CURSOS</span>
        //             </div>
        //
        //             <div className=" flex group hover:cursor-pointer" >
        //                 <UserCircle color="#ffffff" className="w-6 h-6"/>  <span className="text-zinc-200 px-4  font-poppins ">USER</span>
        //             </div>
        //
        //
        //
        //
        //         </div>


    )
}