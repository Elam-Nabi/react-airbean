import styled from "styled-components";

export const CartFullInfo = () => {
  return (
    <CartFullInfoContainer>
      <section className="order">
        <h1 className="order__text">Your orders</h1>
      </section>
    </CartFullInfoContainer>
  );
};

const CartFullInfoContainer = styled.div`
  .order {
    .order__text {
      color: #2f2926;
      top: 12vh;
      right: 22vw;
      font-size: 2.2rem;
      position: absolute;
      z-index: 3;

    }
  }
`;
