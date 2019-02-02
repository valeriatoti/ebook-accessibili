import React from 'react'

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
        <i className="fas fa-download"  aria-hidden="true"/>{' '}
        Scarica l'ePub
        </a>
      </figure>
    )
  }
}

export default CardEbook