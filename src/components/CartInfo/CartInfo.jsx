import styled from "styled-components";
import { useHooks } from "../../hooks/useHooks";

import { AiFillCaretUp } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
export const CartInfo = () => {
  const { cart, activeCart, closeCart } = useHooks();

  return (
    <CartContainer>
      <CloseButton className="close">
        <AiOutlineClose className="close__icon" onClick={() => closeCart()} />
      </CloseButton>
      <AiFillCaretUp className="up-pointer" />
      {activeCart > 0 && (
        <section className="cart-page">
          {cart.map((c, idx) => (
            <div key={c.id}>
              <div key={idx}>
                <h1 className="order-text">Your orders</h1>
                <h1 className="coffee-type">{c.type}</h1>
                <h1 className="coffe-price">{c.price}</h1>
              </div>
            </div>
          ))}
        </section>
      )}
      <button className="cart-button">Take my money!</button>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;

  .up-pointer {
    position: absolute;
    color: #fff;
    font-size: 1.5rem;
    right: 30px;
    top: 3.1rem;
    z-index: 3;
  }

  .cart-page {
    height: 85vh;
    position: absolute;
    top: 10vh;
    left: 20px;
    width: 90vw;
    border-radius: 5px;
    display: grid;
    justify-content: space-evenly;
    align-items: center;
    background: #fff;
  }

  .cart-button {
    color: #fff;
    font-weight: bold;
    background: #2f2926;
    height: 55px;
    width: 210px;
    outline: none;
    border: none;
    border-radius: 25px;
    font-size: 1.3rem;
    position: absolute;
    top: 80vh;
    left: 22vw;
  }
`;

const CloseButton = styled.aside`
  height: 50px;
  width: 50px;
  background: #2f2926;
  border-radius: 50%;
  right: 15px;
  top: 15px;
  position: absolute;
  .close__icon {
    position: relative;
    right: -10px;
    top: 10px;
    color: #fff;
    font-size: 1.8rem;
  }
`;
