import React from 'react'
import { FaDownload } from 'react-icons/fa'

class CardEbook extends React.Component {
  render() {
    const { image, alt, description, download } = this.props.details
    return (
      <figure>
        <img
          src={image}
          alt={alt}
        />
        <figcaption><cite>{description}</cite></figcaption>
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