import React from 'react'
import { Tipografia } from '../../componentes/Tipografia/Tipografia'
import { Col, Row } from 'react-grid-system'
import cliente from "./assets/cliente.png"
import freela from "./assets/freela.png"
import { Link } from '../../componentes/Link/Link'

export default function SelecaoCliente() {
    return (
        <>
            <Tipografia variante="h1" componente="h1">
                Freelando
            </Tipografia>
            <Tipografia variante="h3" componente="h2">
                Como podemos te ajudar
            </Tipografia>
            <Row>
                <Col md={6} sm={12}>
                    <img src={cliente} alt="imagem de uma pessoa" />
                    <Tipografia variante="boddy" componente="body">
                        Sou cliente e preciso de um freela!
                    </Tipografia>
                </Col>
                <Col md={6} sm={12}>
                    <img src={freela} alt="imagem de uma pessoa" />
                    <Tipografia variante="boddy" componente="body">
                        Sou freela e preciso de cliente!
                    </Tipografia>
                </Col>
            </Row>
            <div style={{ textAlign: "center" }}>
                <Tipografia variante="body2" componente="body2">
                    Ja tenho conta
                </Tipografia>
                <p>
                    <Link variante='secundaria'>Faça Login</Link>
                </p>
            </div>

        </>
    )
}
