import styled from "styled-components";
import { MenuList } from "./MenuList";
import { AddButton } from "../../components/AddButton/AddButton";
import { CartInfo } from "../../components/CartInfo/CartInfo";
import { useHooks } from "../../hooks/useHooks";

import { BiShoppingBag } from "react-icons/bi";

import { ReactComponent as TopTree } from "../../assets/graphics/graphics-header.svg";
import { ReactComponent as DownTree } from "../../assets/graphics/graphics-footer.svg";

export const Menu = () => {
  const { showActiveCart, activeCart, cart } = useHooks();

  return (
    <MenuContainer>
      <TopTree />
      <div className="cart">
        <BiShoppingBag
          className="cart__icon"
          onClick={() => showActiveCart()}
        />
        <h1 className="cart__number">
          <span>{cart.length}</span>
        </h1>
      </div>
      {activeCart && <CartInfo className="cart__info" />}
      <h2 className="top-text">Menu</h2>
      <section className="menu-info">
        <AddButton />
        <MenuList />
      </section>
      <DownTree className="down-tree" />
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  .cart {
    height: 50px;
    width: 50px;
    background: #2f2926;
    border-radius: 50%;
    right: 15px;
    top: 15px;
    position: absolute;
    .cart__icon {
      position: relative;
      right: -10px;
      top: 10px;
      color: #fff;
      font-size: 1.8rem;
    }

    .cart__number {
      height: 50%;
      width: 50%;
      border-radius: 50%;
      background: #e5674e;
      top: -7px;
      right: -5px;
      z-index: 3;
      position: absolute;

      span {
        position: relative;
        font-size: 1.29rem;
        font-weight: 100;
        color: #fff;
        display: table;
        margin: 0 auto;
      }
    }
  }

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
