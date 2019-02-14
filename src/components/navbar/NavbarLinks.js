import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: '/',
        name: 'home',
      },
      {
        id: 1,
        path: '/ebook-accessibili/',
        name: 'ebook',
      },
      {
        id: 2,
        path: '/risorse/',
        name: 'risorse',
      },
      {
        id: 3,
        path: '/about/',
        name: 'chi sono',
      },
    ],
  }
  render() {
    // console.log(this.props.navbarOpen)

    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link">
                {item.name}
              </Link>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
    margin: 0;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.4rem 1rem;
    color: #FFF3D8;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      background: #FFF3D8;
      color: #5C4A52;
      border-radius: 2px;
    }
  }
  height: ${props => (props.open ? '170px' : '0px')};
  overflow: hidden;
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: #FFF3D8;
    }
  }
`