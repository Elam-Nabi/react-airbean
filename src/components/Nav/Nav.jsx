import { NavLink as Link } from "react-router-dom";

import styled from "styled-components";
import { NavData } from "./NavData";
import { GrClose } from "react-icons/gr";

import { useHooks } from "../../hooks/useHooks";

export const Nav = () => {
  const { closeNav } = useHooks();

  return (
    <NavContainer>
      <div className="close-container" onClick={() => closeNav()}>
        {" "}
        <GrClose className="close-btn" />
      </div>
      <section>
        {NavData.map((n, idx) => (
          <ul key={n.id} onClick={() => closeNav()}>
            <li key={idx}>
              <NavLink to={n.path} exact activeClassName="active">
                <span className="icon-logo">{n.icon}</span>
                <span className="title-text">{n.title}</span>
              </NavLink>
            </li>
          </ul>
        ))}
      </section>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  position: fixed;
  background: #2f2926;

  .close-container {
    height: 50px;
    width: 50px;
    background: #fff;
    border-radius: 50%;
    left: 15px;
    top: 15px;
    position: absolute;
    .close-btn {
      position: relative;
      left: 10px;
      top: 10px;
      font-size: 1.8rem;
    }
  }

  section {
    padding: 4em;

    ul {
      &::after {
        content: "_________";
        display: inline-block;
        margin-left: 20px;
        color: #838282;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      li {
        margin-top: 50px;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          text-decoration: none;
          color: #fff;
        }

        .icon-logo {
          color: orange;
          font-size: 2.5rem;
          padding-right: 10px;
          z-index: 1;
        }

        .title-text {
          font-size: 2.5rem;
        }
      }
    }
  }
`;
const NavLink = styled(Link)``;
