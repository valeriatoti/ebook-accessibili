import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <section className="container">
      <h1>Libri digitali accessibili</h1>
      <blockquote className="quote-image-cite">
        Gli ebook che trovi su questo sito sono creati con cura, rispettando le <em>specifiche dell'accessibilità</em>, in modo che tutti, anche le persone disabili, possano accedere al contenuto. Gli ebook sono gratuiti e senza <abbr title="Digital Rights Management: gestione dei diritti digitali." className="small-caps">DRM</abbr>.
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
              <h3>FREE & NO-DRM</h3>
              <img src="../images/no-drm.svg" alt="Logo NO-DRM" width="75%" height="auto"/>
            </figure>
            <figure>
              <h3>FORMATO EPUB&#160;3</h3>
              <img src="/images/epub_logo.svg" alt="Logo ePub" width="50%" height="auto"/>
            </figure>
          </div>
    </section>
  </Layout>
)

export default IndexPage
