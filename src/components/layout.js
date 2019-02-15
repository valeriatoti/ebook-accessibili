import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'
import './layout.css'

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

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
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            { name: 'google-site-verification', content: 'aWyogKEw31F9btd2WNcXjmb0sVQlGDFjYHA-6HNJEBY' },
          ]}
        >
          <html lang="it" />

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
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          {children}
        </Container>
        <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
