import React from 'react'

class CardEbook extends React.Component {
  render() {
    return (
      <figure itemscope itemtype="http://schema.org/Book">
          <meta itemprop="bookFormat" content="EBook/EPUB3"/>
          <meta itemprop="accessibilityFeature" content="structuralNavigation"/>
          <meta itemprop="accessibilityFeature" content="tableOfContents"/>
          <meta itemprop="accessibilityFeature" content="alternativeText"/>
          <meta itemprop="accessibilityControl" content="fullKeyboardControl"/>
          <meta itemprop="accessibilityControl" content="fullMouseControl"/>
          <meta itemprop="accessibilityHazard" content="noFlashingHazard"/>
          <meta itemprop="accessibilityHazard" content="noMotionSimulationHazard"/>
          <meta itemprop="accessibilityHazard" content="noSoundHazard"/>
          <meta itemprop="accessibilityAPI" content="ARIA"/>
        <img
          itemprop="image"
          src={this.props.details.image}
          alt={this.props.details.alt}
        />
        <figcaption itemprop="name">{this.props.details.description}</figcaption>
        <a
        role="button"
        href={this.props.details.download}
        className="btn-download"
        aria-label="Scarica l'ePub"
        >
        <i class="fas fa-download"  aria-hidden="true" />{' '}
        Scarica l'ePub
        </a>
      </figure>
    )
  }
}

export default CardEbook