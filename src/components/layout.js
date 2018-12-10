import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Ebook accessibili e gratuiti. Scaricabili liberamente e accessibili anche alle persone con handicap. EPUB 3: formato nativamente accessibile.' },
            { name: 'keywords', content: 'ebook, ebook accessibili, accessibilità digitale, ePub' },
          ]}
        >
          <html lang="it" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
          <script type="application/ld+json">{`
          {
            "@context": "http://schema.org/",
            "@type": "Person",
            "name": "Valeria Toti",
            "url": "https://www.ebookaccessibili.it/",
            "image": "https://drive.google.com/open?id=1Benl_eVybk4vfs7XwJnsDhi3Lr0lVZtE",
            "sameAs": "https://www.linkedin.com/in/valeria-toti/",
            "jobTitle": "ebook developer",
            "worksFor": {
              "@type": "Organization",
              "name": "ebookaccessibili.it"
            }
          }
          `}</script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-130687964-1"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-130687964-1');
            `}
          </script>
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
