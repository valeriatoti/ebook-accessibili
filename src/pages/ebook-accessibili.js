import React from 'react'
import Books from '../components/Books'
import Layout from '../components/layout'
import SEO from '../components/SEO'

const PageEbooks = () => (
  <Layout>
    <SEO
      title="Ebook gratuiti e accessibili anche ai disabili"
      description="Gli ebook sono in formato ePub. Ciascuno di questi libri digitali è ottimizzato per essere letto anche con l'ausilio di tecnologie assistive."
    />
    <h1>Catalogo degli ebook accessibili</h1>
    <Books />
  </Layout>
)

export default PageEbooks
