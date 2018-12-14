import React from 'react'
import { Link } from 'gatsby'
import NoDrm from '../images/no-drm.svg'
import LogoEpub from '../images/epub_logo.svg'
import A11Y from '../images/accessibility-icon.svg'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <section className="container">
      <h1>Libri digitali accessibili</h1>
      <blockquote className="quote-image-cite">
        Gli ebook che trovi su questo sito sono creati con cura, rispettando le <em><a href="http://www.idpf.org/epub/a11y/accessibility.html">specifiche dell'accessibilità</a></em>, in modo che tutti, anche le persone disabili, possano accedere al contenuto. Gli ebook sono gratuiti e senza <abbr title="Digital Rights Management: gestione dei diritti digitali." className="small-caps">DRM</abbr>.
        <cite><a href="https://github.com/valeriatoti">
      valeria toti</a><br/>
      ebook developer
      </cite>
      </blockquote>
    </section>
    <section className="bg-box-home">
          <h2>
            <Link
            to="/ebook-accessibili/"
            role="button"
            className="btn-red">
            scegli il tuo ebook
            </Link>
          </h2>
          <div className="box-home-flex">
            <figure>
              <h3>EPUB&#160;3</h3>
              <img src={LogoEpub} alt="" role="presentation" height="100"/>
            </figure>
            <figure>
              <h3>ACCESSIBILITÀ</h3>
              <img src={A11Y} alt="" role="presentation" height="100"/>
            </figure>
            <figure>
              <h3>NO-DRM</h3>
              <img src={NoDrm} alt="" role="presentation" height="100"/>
            </figure>

          </div>
    </section>
  </Layout>
)

export default IndexPage
