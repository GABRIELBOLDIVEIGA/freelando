import React, { useEffect, useState } from 'react'
import { Tipografia } from '../../componentes/Tipografia/Tipografia'
import GrupoRadio from '../../componentes/GrupoRadio'
import { Row, Col } from 'react-grid-system';
import { Botao } from '../../componentes/Botao/Botao';
import { Link, useNavigate } from 'react-router-dom';
import { useUsuarioCadastroContext } from '../../contexto/CadastroUsuario';

const opcoes = [
   {
      valor: 1,
      label: "TI e Programação",
   },
   {
      valor: 2,
      label: "Design e Multimídia",
   },
   {
      valor: 3,
      label: "Revisão",
   },
   {
      valor: 4,
      label: "Tradução",
   },
   {
      valor: 5,
      label: "Transcrição",
   },
   {
      valor: 6,
      label: "Marketing",
   }
]

export default function Interesses() {
   const navegar = useNavigate();
   const { setInteresse, usuario, possoSelecionarInteresse } = useUsuarioCadastroContext()

   useEffect(() => {
      if (!possoSelecionarInteresse()) {
         navegar("/cadastro")
      }
   }, [navegar, possoSelecionarInteresse])

   return (
      <div style={{ textAlign: "center" }}>
         <Tipografia variante="h1" componente="h1">
            Crie seu cadastro
         </Tipografia>
         <Tipografia variante="h3" componente="h2">
            Qual a area de interesse ?
         </Tipografia>
         <GrupoRadio opcoes={opcoes} valor={usuario.interesse} onChange={setInteresse} />

         <Row>
            <Col lg={6} md={6} sm={6}>
               <Link to="/cadastro">
                  <Botao variante="secundaria">
                     Anterior
                  </Botao>
               </Link>
            </Col>
            <Col lg={6} md={6} sm={6}>
               <div style={{ textAlign: 'right' }}>
                  <Link to="/cadastro/dados-pessoais">
                     <Botao>
                        Próxima
                     </Botao>
                  </Link>
               </div>
            </Col>
         </Row>
      </div>
   )
}
