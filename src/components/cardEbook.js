import React from 'react'
import { Link } from 'gatsby'

class CardEbook extends React.Component {
  render() {
    return (
      <figure>
        <img
          src={this.props.details.image}
          alt={this.props.details.alt}
        />
        <figcaption>{this.props.details.description}</figcaption>
        <Link
        role="button"
        to={this.props.details.download}
        className="btn-download"
        >
        Scarica l'ePub
        </Link>
      </figure>
    )
  }
}

export default CardEbook