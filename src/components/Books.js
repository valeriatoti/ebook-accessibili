import React from 'react'
import Book from './Book'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const BooksContainer = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 20px;
    figure {
        margin: 20px;
        padding-bottom: 35px;
        .img-cover {
            margin-bottom: 0.75em;
        }
    }
@media (min-width: 576px) {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    figure {
        width: 40%;
    }
}
@media (min-width: 768px) {
    figure {
        width: 27%;
    }
}`

function Books() {
  return (
    <StaticQuery
      query={bookQuery}
      render={data => (
          <BooksContainer>
              {data.allBooksJson.edges.map(({ node: book }) => {
              return <Book key={book.id} book={book} />
                })}
          </BooksContainer>
        )
      }
    />
  )
}

export default Books

const bookQuery = graphql`
  query allBooks {
    allBooksJson {
      edges {
        node {
          id
          title
          subtitle
          author
          image {
            childImageSharp {
              fluid(maxHeight: 900) {
                src
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
          download
        }
      }
    }
  }
`