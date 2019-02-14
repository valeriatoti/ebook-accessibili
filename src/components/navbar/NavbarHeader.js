import React, { Component } from 'react'
import { Link } from 'gatsby'

import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'


export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <h1>ebook accessibili</h1>
        </Link>
        <FaBars
          className="toggle-icon"
          onClick={() => {
            handleNavbar()
          }}
        />
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 1.45rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #FFF3D8;
    margin: 0;
  }
  .toggle-icon {
    font-size: 2rem;
    color: #FFF3D8;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`
