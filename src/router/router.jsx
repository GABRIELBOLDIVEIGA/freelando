import { createBrowserRouter } from "react-router-dom"
import SelecaoCliente from "../paginas/Cadastro/SelecaoCliente.tsx";
import LayoutBaseCadastro from "../paginas/Cadastro/LayoutBaseCadastro.tsx";
import LayoutBase from "../paginas/LayoutBase.tsx";
import Interesses from "../paginas/Cadastro/Interesses.jsx";

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
                        element: <h1>Dado Pessoais</h1>
                    },
                    {
                        path: "concluido",
                        element: <h1>Concluido</h1>
                    }
                ]
            }
        ],
    }
]);