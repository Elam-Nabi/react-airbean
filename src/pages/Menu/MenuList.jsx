import { MenuData } from "./MenuData";
import styled from "styled-components";

import { BiShoppingBag } from "react-icons/bi";
import { AiFillPlusCircle } from "react-icons/ai";

export const MenuList = () => {
  return (
    <MenuContainer>
      <div className="cart">
        <BiShoppingBag className="cart__icon" />
      </div>
      <section className="menu-output">
        {MenuData.map((m, idx) => (
          <ul key={m.id}>
            <li key={idx}>
              <span className="coffe-type">{m.type}</span>
              <span className="coffe-price">{m.price}</span>
              <span className="coffe-info">Brewed on this months beans</span>
            </li>
          </ul>
        ))}
      </section>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: grid;
  margin-top: 40px;

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
  }

  .menu-output {
    ul {
      li {
        display: grid;
        margin: 25px;
      }
    }

    .coffe-type {
      font-size: 1.5rem;
      font-weight: bold;
      color: #2f2926;
    }

    .coffe-info {
      color: #2f2926;
      display: block;
    }

    .coffe-price {
      color: #2f2926;
      position: absolute;
      right: 30px;
      font-size: 1.5rem;
      font-weight: bold;
      color: #2f2926;
    }
  }
`;
