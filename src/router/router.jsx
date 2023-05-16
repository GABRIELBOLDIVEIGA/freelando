import { createBrowserRouter } from "react-router-dom"
import PaginaInicial from "../paginas/PaginaInicial"
import SelecaoCliente from "../paginas/Cadastro/SelecaoCliente.tsx";
import LayoutBaseCadastro from "../paginas/Cadastro/LayoutBaseCadastro.tsx";
import LayoutBase from "../paginas/LayoutBase.tsx";

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
                        path: "cliente",
                        element: <h1>Interesses</h1>
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