import styled from "styled-components";

import { ReactComponent as Logo } from "../../assets/graphics/airbean-landing.svg";
import { ReactComponent as TreeLeft } from "../../assets/graphics/intro-graphic-left.svg";
import { ReactComponent as TreeRight } from "../../assets/graphics/intro-graphic-right.svg";

import { Nav } from "../../components/Nav/Nav";
import { useHooks } from '../../hooks/UseHooks'


export const Home = () => {

  const { navOpen, showNav } = useHooks();
  

  return (
    <HomeContainer>
      {navOpen && <Nav />}
      <Logo className="Landing-logo" onClick={() => showNav()} />
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
