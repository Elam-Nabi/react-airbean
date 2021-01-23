import { FaHamburger } from "react-icons/fa";
import { useHooks } from "../../hooks/UseHooks";
import { Nav } from '../Nav/Nav'

import styled from 'styled-components';

export const Hamburger = () => {

  const { navOpen,showNav } = useHooks();
  

    return (
        <HamburgerContainer>
        {navOpen && <Nav /> }
        <div className="hamburger" onClick={() => showNav()}>
        <FaHamburger className="hamburger-icon" />
      </div>
      </HamburgerContainer>
    )
}

const HamburgerContainer = styled.div`

.hamburger {
    height: 50px;
    width: 50px;
    background: #fff;
    border-radius: 50%;
    left: 15px;
    top: 15px;
    position: absolute;
    .hamburger-icon {
      position: relative;
      left: 10px;
      top: 10px;
      font-size: 1.8rem;
    }
  }
`
