import React from 'react'
import Navbar from './navbar/Navbar'

const Header = () => (
  <header>
  <Navbar />
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
