import {Book, Monitor, UserCircle} from "phosphor-react";


export function Navbar(){
    return(
        <div>
            <nav className="bg-zinc-800  w-screen h-20 flex items-center">
                <div id={"logo"} className="text-zinc-200 text-2xl font-serif ml-4 tracking-wide flex group hover:cursor-pointer">
                    <Monitor size={32} color="#ffffff" className="mt-0.5 mx-2 ml-0" />
                    <span className="">
                        Learn To Code
                    </span>
                </div>

                <div className="absolute right-10 flex space-x-4 ">

                    <div className=" flex group hover:cursor-pointer group-hover:right-11 " >
                        <Book className="w-8 h-8 group" color="#ffffff" /> <span className="text-zinc-200 px-4 text-lg font-poppins group">CURSOS</span>
                    </div>

                    <div className=" flex group hover:cursor-pointer" >
                        <Book className="w-8 h-8" color="#ffffff" /> <span className="text-zinc-200 px-4 text-lg font-poppins">CURSOS</span>
                    </div>

                    <div className=" flex group hover:cursor-pointer" >
                        <UserCircle color="#ffffff" className="w-8 h-8"/>  <span className="text-zinc-200 px-4 text-lg font-poppins ">USER</span>
                    </div>




                </div>


            </nav>
        </div>
    )
}