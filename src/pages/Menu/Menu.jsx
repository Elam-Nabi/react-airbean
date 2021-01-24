import styled from "styled-components";
import { MenuList } from "./MenuList";
import { AddButton } from '../../components/AddButton/AddButton';

import { ReactComponent as TopTree } from "../../assets/graphics/graphics-header.svg";
import { ReactComponent as DownTree } from "../../assets/graphics/graphics-footer.svg";

export const Menu = () => {
  return (
    <MenuContainer>
      <TopTree />
      <h1 className="top-text">Menu</h1>
      <section className="menu-info">
      <AddButton />
        <MenuList />
      </section>
      <DownTree className="down-tree" />
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  .top-text {
    color: #2f2926;
    font-size: 2.5rem;
    position: absolute;
    top: 18vh;
    left: 35vw;
  }
  .menu-info {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 40px;
  }

  .down-tree {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
