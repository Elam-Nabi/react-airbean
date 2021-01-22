import { useHooks } from "../../hooks/UseHooks";
import { Nav } from "../../components/Nav/Nav";

import styled from "styled-components";
import { FaHamburger } from "react-icons/fa";

export const About = () => {
  const { navOpen, showNav } = useHooks();

  return (
    <AboutContainer>
      {navOpen && <Nav />}
      <div className="hamburger" onClick={() => showNav()}>
        <FaHamburger className="hamburger-icon" />
      </div>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  background: #f3e4e1;
  height: 100vh;

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
`;
