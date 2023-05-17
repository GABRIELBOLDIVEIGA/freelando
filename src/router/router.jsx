import { createBrowserRouter } from "react-router-dom"
import SelecaoCliente from "../paginas/Cadastro/SelecaoCliente.jsx";
import LayoutBaseCadastro from "../paginas/Cadastro/LayoutBaseCadastro.jsx";
import LayoutBase from "../paginas/LayoutBase.jsx";
import Interesses from "../paginas/Cadastro/Interesses.jsx";
import DadosPessoais from "../paginas/Cadastro/DadosPessoais.jsx";
import Concluido from "../paginas/Cadastro/Concluido.jsx";

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