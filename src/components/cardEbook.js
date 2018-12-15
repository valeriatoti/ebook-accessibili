import React from 'react'

class CardEbook extends React.Component {
  render() {
    return (
      <figure>
        <img
          src={this.props.details.image}
          alt={this.props.details.alt}
        />
        <figcaption><cite>{this.props.details.description}</cite></figcaption>
        <a
        role="button"
        href={this.props.details.download}
        className="btn-download"
        aria-label="Scarica l'ePub"
        >
        <i class="fas fa-download"  aria-hidden="true"/>{' '}
        Scarica l'ePub
        </a>
      </figure>
    )
  }
}

export default CardEbook