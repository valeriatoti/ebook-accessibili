import React from 'react'
// import { Link } from 'gatsby'
import CardEbook from '../components/cardEbook'
import books from '../booksList'
import Layout from '../components/layout'


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
      <h1>Catalogo degli ebook accessibili</h1>
      <main className="box-flex">
        { books }
      </main>
      </Layout>
    )
  }
}

export default PageEbooks
