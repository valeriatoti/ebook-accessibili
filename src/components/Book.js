import React from 'react'
import { FaDownload } from 'react-icons/fa'
import Img from 'gatsby-image'

function Book({ book }) {
  return (
    <figure itemscope itemtype="http://schema.org/Book">
      <meta itemprop="bookFormat" content="EBook"/>
      <Img
        itemprop="image"
        className="img-cover"
        fluid={book.image.childImageSharp.fluid}
        alt={book.alt}
      />
      <figcaption>
        <cite itemprop="name">
        <b>{book.title}{' '}{book.subtitle}</b>
        </cite>
        <p>di <span itemprop="author">{book.author}</span></p>
        </figcaption>
      <a
      role="button"
      href={book.download}
      className="btn-download"
      aria-label="Scarica l'ePub"
      >
      <FaDownload aria-hidden="true"/>
      {' '}
      Scarica l'ePub
      </a>
    </figure>
  )
}

export default Book