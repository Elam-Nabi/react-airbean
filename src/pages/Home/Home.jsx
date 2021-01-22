import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/graphics/airbean-landing.svg";
import { ReactComponent as TreeLeft } from "../../assets/graphics/intro-graphic-left.svg";
import { ReactComponent as TreeRight } from "../../assets/graphics/intro-graphic-right.svg";

export const Home = () => {
  return (
    <HomeContainer>
      <NavLink to="/menu">
        <Logo className="Landing-logo" />
      </NavLink>
      <TreeLeft className="Landing-logo-left" />
      <TreeRight className="Landing-logo-right" />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  background: #38846d;
  height: 100vh;
  width: 100vw;

  .Landing-logo {
    position: absolute;
    top: 35vh;
    left: 15vw;
  }

  .Landing-logo-right {
    position: absolute;
    right: 0;
  }
`;

const NavLink = styled(Link)``;
