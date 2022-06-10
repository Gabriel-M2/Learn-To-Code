import {ArrowRight} from "phosphor-react";

export function Conteudo() {
    return (
        <div className={"bg-zinc-900 w-screen h-screen absolute flex"}>

            <div className={"absolute top-40 mx-10 "}>
                <h1 className={"text-indigo-500 text-4xl font-[roboto]"}>
                    HTML
                </h1>
                <p className={"text-zinc-200  my-4  w-[100rem] max-w-[50%]"}>HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo</p>

                <a className={"text-zinc-200 bg-indigo-500 rounded-2xl p-4 w-[12rem]  font-[roboto] flex  hover:px-6 hover:py-5 hover:w-[13rem] transition-all"} ><a href="/pag3.html">IR PARA O CURSO</a> <ArrowRight className={"my-1 ml-2"} size={16} color="#ffffff" />  </a>
            </div>

            <div className={"absolute top-[30rem] mx-10"}>s
                <h1 className={"text-indigo-500 text-4xl font-[roboto]"}>
                    CSS
                </h1>
                <p className={"text-zinc-200  my-4 w-[100rem] max-w-[50%]"}>Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags style Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos.</p>

                <a className={"text-zinc-200 bg-indigo-500 rounded-2xl p-4 w-[12rem]  font-[roboto] flex  hover:px-6 hover:py-5 hover:w-[13rem] transition-all"} ><a href="/pag3.html">IR PARA O CURSO</a> <ArrowRight className={"my-1 ml-2"} size={16} color="#ffffff" />  </a>
            </div>

            <div className={"absolute top-[50rem] mx-10"}>
                <h1 className={"text-indigo-500 text-4xl font-[roboto]"}>
                    JS
                </h1>
                <p className={"text-zinc-200  my-4 w-[100rem] max-w-[50%]"}>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.</p>

                <a className={"text-zinc-200 bg-indigo-500 rounded-2xl p-4 w-[12rem]  font-[roboto] flex  hover:px-6 hover:py-5 hover:w-[13rem] transition-all"} ><a href="/pag3.html">IR PARA O CURSO</a> <ArrowRight className={"my-1 ml-2"} size={16} color="#ffffff" />  </a>
            </div>

            <div className={"absolute top-[70rem] mx-10"}>
                <h1 className={"text-indigo-500 text-4xl font-[roboto]"}>
                    PHP
                </h1>
                <p className={"text-zinc-200  my-4 w-[100rem] max-w-[50%]"}>PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web</p>

                <a className={"text-zinc-200 bg-indigo-500 rounded-2xl p-4 w-[12rem]  font-[roboto] flex  hover:px-6 hover:py-5 hover:w-[13rem] transition-all"} ><a href="/pag3.html">IR PARA O CURSO</a> <ArrowRight className={"my-1 ml-2"} size={16} color="#ffffff" />  </a>
            </div>
            <div className={"absolute w-screen h-[10rem] top-[82rem]"}></div>
        </div>
    )
}