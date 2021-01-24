import { useState, useEffect } from "react";
import styled from "styled-components";

import { AiFillPlusCircle } from "react-icons/ai";

export const AddButton = () => {
  return (
    <AddButtonContainer>
      <ul>
        <li>
          <AiFillPlusCircle className="first-btn" />
        </li>
        <li>
          <AiFillPlusCircle className="second-btn" />
        </li>
        <li>
          <AiFillPlusCircle className="third-btn" />
        </li>
        <li>
          <AiFillPlusCircle className="forth-btn" />
        </li>
        <li>
          <AiFillPlusCircle className="fifth-btn" />
        </li>
        <li>
          <AiFillPlusCircle className="sixth-btn" />
        </li>
      </ul>
    </AddButtonContainer>
  );
};

const AddButtonContainer = styled.div`
  position: absolute;

  ul {
    li {
      top: 18px;
      left: -135px;
      position: relative;
      margin: 25px;
      font-size: 2.3rem;
      list-style: none;

      .onpress-btn {
        color: gold;
      }
    }
  }
`;
