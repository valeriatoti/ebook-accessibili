import React from 'react'
import { FaDownload } from 'react-icons/fa'
// import Img from 'gatsby-image'

function Book({ book }) {
  const imgCover = require(`../images/${book.image}.jpg`)
  return (
    <figure itemscope itemtype="http://schema.org/Book">
      <meta itemprop="bookFormat" content="EBook"/>
      <img
        itemprop="image"
        src={imgCover}
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