import {ArrowRight} from "phosphor-react";

export function Video() {
    return (
        <div>
            <div >
                <div className={"w-[74rem] h-[36rem] bg-[rgb(0,0,0)] absolute top-[8rem] left-[6rem] flex items-center justify-center"}>

                    <div className={"absolute  w-28 h-28 rounded-full bg-zinc-600 flex items-center justify-center hover:cursor-pointer"}>
                        <div className={" triangulo absolute ml-4 bg-white h-10 w-10"}>

                        </div>
                    </div>
                    <div className={"w-full h-2 bg-red-600 absolute bottom-0 hover:cursor-pointer"}>

                    </div>
                </div>
            </div>
        </div>
    )
}