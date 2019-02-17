import React from 'react'
import { FaDownload } from 'react-icons/fa'

class CardEbook extends React.Component {
  render() {
    const { title, subtitle, author, image, alt, download } = this.props.details
    const imgCover = require(`../images/${image}.jpg`)
    return (
      <figure itemscope="" itemtype="http://schema.org/Book">
        <img
          src={imgCover}
          alt={alt}
        />
        <figcaption>
          <cite itemprop="name"><b>{title}{' '}{subtitle}</b></cite>
          <p itemprop="author">di {author}</p>
          </figcaption>
        <a
        role="button"
        href={download}
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
}

export default CardEbook