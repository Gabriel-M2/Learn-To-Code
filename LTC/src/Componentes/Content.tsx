import bus from './../Assets/Bus.svg'



export function Content() {



    return (
        <div className="extra:flex extra:justify-center ">




            <div id='fade-in-left' className="medium:flex absolute items-center sm:mt-0 sm:ml-24 justify-center top-24 medium:top-[12rem] ">
                <div className=" font-roboto text-3xl medium:text-5xl w-full p-5 text-zinc-400">
                    <h1 className="py-1">
                        CANSADO DE FICAR
                    </h1>
                    <h1 className="py-1 pt-2">
                        ESPERANDO HORAS NO PONTO DE ÔNIBUS ?
                    </h1>
                    <div className="flex my-6 ">
                        <h1 className="py-1 pt-2">
                            TENTE
                        </h1>
                        <h1 className="bg-gradient-to-r from-pink-600 to-indigo-600 ml-6 p-2  rounded text-white tracking-widest hover:text-4xl sm:hover:text-6xl transition-all">
                            TOS
                        </h1>
                    </div>
                </div>

                <div className={" ml-80 invisible breack2:visible min-w-[300px] "}>
                    <img src={bus} alt="" />
                </div>

            </div>



        </div>

    )


}