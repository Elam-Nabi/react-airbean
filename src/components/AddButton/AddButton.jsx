import styled from "styled-components";

import { useHooks } from "../../hooks/useHooks";
import { AiFillPlusCircle } from "react-icons/ai";

export const AddButton = () => {
  const {
    firstCoffee,
    secondCoffee,
    thirdCoffee,
    fourthCoffee,
    fifthCoffee,
    sixthCoffee,
  } = useHooks();

  return (
    <AddButtonContainer>
      <ul>
        <li>
          <AiFillPlusCircle onClick={() => firstCoffee()} />
        </li>
        <li>
          <AiFillPlusCircle onClick={() => secondCoffee()} />
        </li>
        <li>
          <AiFillPlusCircle onClick={() => thirdCoffee()} />
        </li>
        <li>
          <AiFillPlusCircle onClick={() => fourthCoffee()} />
        </li>
        <li>
          <AiFillPlusCircle onClick={() => fifthCoffee()} />
        </li>
        <li>
          <AiFillPlusCircle onClick={() => sixthCoffee()} />
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
