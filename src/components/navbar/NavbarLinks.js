import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: '/ebook-accessibili/',
        name: 'ebook',
      },
      {
        id: 1,
        path: '/risorse/',
        name: 'risorse',
      },
      {
        id: 2,
        path: '/checklist/',
        name: 'checklist',
      },
      {
        id: 3,
        path: '/about/',
        name: 'about',
      }
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
margin: 0;
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
    transition:all 0.5s ease-in-out;
    &:hover {
      background: #FFF3D8;
      color: #5C4A52;
      border-radius: 2px;
    }
  }
  height: ${props => (props.open ? '170px' : '0px')};
  overflow: hidden;
  @media (min-width: 480px) {
    height: ${props => (props.open ? '190px' : '0px')};
  }
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: #FFF3D8;
    }
  }
`
