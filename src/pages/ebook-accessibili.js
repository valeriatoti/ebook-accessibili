import React from 'react'
// import { Link } from 'gatsby'
import CardEbook from '../components/cardEbook'
import books from '../booksList'
import Layout from '../components/layout'
import SEO from '../components/SEO'

class PageEbooks extends React.Component {
  state = {
    ...books
  }

  render() {
    const books = Object
    .keys(this.state)
    .map(book => <CardEbook
      key={book}
      details={this.state[book]}
      />)

    return (
      <Layout>
      <SEO
        pageTitle="Catalogo degli ebook gratuiti"
        description="Gli ebook sono in formato ePub. Ciascuno di questi libri digitali è ottimizzato per essere letto anche con l'ausilio di tecnologie assistive."
      />
      <h1>Catalogo degli ebook accessibili</h1>
      <main className="box-flex">
        { books }
      </main>
      </Layout>
    )
  }
}

export default PageEbooks
