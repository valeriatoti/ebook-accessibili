import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <h1>PAGINA NON TROVATA</h1>
    <p>
      Questa pagina non esiste... Vai alla <Link to="/">Home</Link>
    </p>
  </Layout>
)

export default NotFoundPage
