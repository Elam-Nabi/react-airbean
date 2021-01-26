import { MenuData } from "./MenuData";
import styled from "styled-components";

export const MenuList = () => {
  return (
    <MenuContainer>
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
