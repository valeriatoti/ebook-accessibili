import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, image, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          siteLang,
          defaultDescription,
          siteUrl,
          author,
          defaultImage,
          twitterUsername,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || '/'}`,
      }

      // schema.org in JSONLD format
      // https://developers.google.com/search/docs/guides/intro-structured-data

      const schemaOrgWebPage = {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        url: siteUrl,
        inLanguage: siteLang,
        mainEntityOfPage: siteUrl,
        description: defaultDescription,
        name: defaultTitle,
        author: {
          '@type': 'Person',
          name: author,
        },
        copyrightHolder: {
          '@type': 'Person',
          name: author,
        },
        copyrightYear: '2019',
        creator: {
          '@type': 'Person',
          name: author,
        },
        publisher: {
          '@type': 'Person',
          name: author,
        },
      }

      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <html lang={siteLang} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {/* Schema.org tags */}
            <script type="application/ld+json">
              {JSON.stringify(schemaOrgWebPage)}
            </script>
            {/* “Open Graph” meta tags */}
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            {/* TWITTER CARD*/}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
              <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        siteLang
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        author
        twitterUsername
      }
    }
  }
`
