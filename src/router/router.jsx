import { createBrowserRouter } from "react-router-dom"
import SelecaoCliente from "../paginas/Cadastro/SelecaoCliente.tsx";
import LayoutBaseCadastro from "../paginas/Cadastro/LayoutBaseCadastro.tsx";
import LayoutBase from "../paginas/LayoutBase.tsx";
import Interesses from "../paginas/Cadastro/Interesses.tsx";
import DadosPessoais from "../paginas/Cadastro/DadosPessoais.tsx";
import Concluido from "../paginas/Cadastro/Concluido.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase />,
        children: [
            {
                path:"cadastro",
                element: <LayoutBaseCadastro />,
                children: [
                    {
                        path: "",
                        element: <SelecaoCliente />
                    },
                    {
                        path: "interesses",
                        element: <Interesses />
                    },
                    {
                        path: "dados-pessoais",
                        element: <DadosPessoais />
                    },
                    {
                        path: "concluido",
                        element: <Concluido />
                    }
                ]
            }
        ],
    }
]);