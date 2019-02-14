import React, { Component } from 'react'
import styled from 'styled-components'
import {  FaTwitter } from 'react-icons/fa'

export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: 'https://twitter.com/valeria_toti',
      },
      // {
      //   id: 2,
      //   icon: <FaRegEnvelope className="icon contact-icon" />,
      //   path: '/contatti/',
      // },
    ],
  }
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => {
          return (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
  }
  .twitter-icon {
    color: #3ab7f0;
  }
  .icon:hover {
    color: #FFF3D8;
  }
  display: none;
  @media (min-width: 1124px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`
