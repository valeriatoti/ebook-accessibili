import React from 'react'
import Navbar from './navbar/Navbar'
import styled from 'styled-components'

const SubNav = styled.div`
  background: #F6F2EE;
  margin: 0 auto;
  padding: 0.8rem 1.0875rem;
  text-align: right;
  p {
    margin: 0;
    color: #5C4A52;
  }
`

const Header = () => (
  <header>
    <Navbar />
    <SubNav>
      <p>
      Aiutami a creare ePub free e accessibili
      <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6QAG82BXDSDLJ" role="button" className="donate">Fai una donazione</a>
      </p>
    </SubNav>
  </header>
)

export default Header
