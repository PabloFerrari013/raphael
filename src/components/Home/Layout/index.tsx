import Head from 'next/head'
import React from 'react'
import Main from '../Main'
import { Container } from './styles'

const Layout: React.FC = () => {
  return (
    <>
      <Head>
        <title>Rapahel Cabral | Fotografias</title>
      </Head>

      <Container>
        <Main />
      </Container>
    </>
  )
}

export default Layout
