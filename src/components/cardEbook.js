import React from 'react'

class CardEbook extends React.Component {
  render() {
    return (
      <figure>
        <img
          src={this.props.details.image}
          alt={this.props.details.alt}
        />
        <figcaption>{this.props.details.description}</figcaption>
        <a
        role="button"
        href={this.props.details.download}
        className="btn-download"
        >
        Scarica l'ePub
        </a>
      </figure>
    )
  }
}

export default CardEbook