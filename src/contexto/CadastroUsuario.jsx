import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const usuarioInicial = {
    perfil: "",
    interesse: "",
    nomeCompleto: "",
    uf: "",
    cidade: "",
    email: "",
    senha: "",
    senhaConfirmada: "",
    erro: ""
}

export const CadastroUsuarioContext = createContext({
    usuario: usuarioInicial,
    erro: {},
    setPerfil: () => null,
    setInteresse: () => null,
    setNomeCompleto: () => null,
    setUf: () => null,
    setCidade: () => null,
    setEmail: () => null,
    setSenha: () => null,
    setSenhaConfirmada: () => null,
    possoSelecionarInteresse: () => null,
    possoPreencherDadosPessoais: () => null,
})

CadastroUsuarioContext.displayName = "usuarioCadastro";

export const CadastroUsuarioProvider = ({ children }) => {
    const navegar = useNavigate();

    const [usuario, setUsuario] = useState(usuarioInicial);

    const setPerfil = (perfil) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                perfil
            }
        })
    }

    const setInteresse = (interesse) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                interesse
            }
        })
    }

    const setNomeCompleto = (nomeCompleto) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                nomeCompleto
            }
        })
    }

    const setUf = (uf) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                uf
            }
        })
    }

    const setCidade = (cidade) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                cidade
            }
        })
    }

    const setEmail = (email) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                email
            }
        })
    }

    const setSenha = (senha) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                senha
            }
        })
    }

    const setSenhaConfirmada = (senhaConfirmada) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                senhaConfirmada
            }
        })
    }

    const setErro = (erro) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                erro: erro
            }
        })
    }

    const submeterUsuario = () => {
        if (usuario.senha.length < 6) {
            setErro("Senha Muito curta...");
            return
        }

        if (usuario.senha !== usuario.senhaConfirmada) {
            setErro("Senhas devem ser iguais...")
            return
        }

        if (usuario.nomeCompleto.length < 5) {
            setErro("Digite seu nome completo")
            return
        }

        if (usuario.cidade.length < 3) {
            setErro("Digite sua Cidade")
            return
        }

        if(usuario.uf.length < 2) {
            setErro("Selecione um estado")
            return
        }
        
        navegar("/cadastro/concluido");
    }

    const possoSelecionarInteresse = () => {
        return !!usuario.perfil
    }

    const possoPreencherDadosPessoais = () => {
        return !!usuario.interesse
    }

    const contexto = {
        usuario,
        setPerfil,
        setInteresse,
        setNomeCompleto,
        setUf,
        setCidade,
        setEmail,
        setSenha,
        setSenhaConfirmada,
        submeterUsuario,
        possoSelecionarInteresse,
        possoPreencherDadosPessoais
    }

    return (
        <CadastroUsuarioContext.Provider value={contexto}>
            {children}
        </CadastroUsuarioContext.Provider>
    )
}

export const useUsuarioCadastroContext = () => {
    return useContext(CadastroUsuarioContext)
}