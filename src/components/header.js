import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#5C4A52',
      marginBottom: '1.45rem',
      color: '#FFF3D8',
      fontFamily: 'Exo',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <p style={{
        margin: 0,
        fontWeight: 'bold',
        fontSize: '2.25rem',
        }}>
        <Link
          to="/"
          style={{
            color: '#FFF3D8',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </p>
    </div>
    <div
     style={{
      background: '#F6F2EE',
      margin: '0 auto',
      padding: '0.8rem 1.0875rem',
      textAlign: 'right',
      }}
      >
      <p
        style={{
         margin: '0',
         color: '#5C4A52',
      }}
      >
      Aiutami a creare ePub free e accessibili
      <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6QAG82BXDSDLJ" role="button" className="donate">Fai una donazione</a>
      </p>
    </div>
  </header>
)

export default Header
