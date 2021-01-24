import styled from "styled-components";
import { useHooks } from "../../hooks/useHooks";

import { AiFillCaretUp } from "react-icons/ai";

export const CartInfo = () => {
  const { cart, activeCart, closeCart } = useHooks();

  return (
    <CartContainer onClick={() => closeCart()}>
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
      <button>Take my money!</button>
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
`;
