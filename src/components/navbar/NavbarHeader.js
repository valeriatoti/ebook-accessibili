import React from 'react'
import { Link } from 'gatsby'

import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'

// export default class NavbarHeader extends Component {
//   render() {
//     const { handleNavbar } = this.props
//     return (
//       <HeaderWrapper>
//         <Link to="/">
//           <h1>ebook accessibili</h1>
//         </Link>
//         <FaBars
//           className="toggle-icon"
//           onClick={() => {
//             handleNavbar()
//           }}
//         />
//       </HeaderWrapper>
//     )
//   }
// }

const NavbarHeader = ({ handleNavbar }) => (
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

export default NavbarHeader

const HeaderWrapper = styled.div`
  padding: 1.45rem 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #fff3d8;
    margin: 0;
  }
  .toggle-icon {
    font-size: 2rem;
    color: #fff3d8;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    padding: 1.45rem 1.4rem;
    .toggle-icon {
      display: none;
    }
  }
`
