import styled from "styled-components";

export const CartEmptyInfo = () => {
  return (
    <EmptyCartContainer>
      <section className="empty">
        <h1 className="empty__info">😭Cart empty...</h1>
      </section>
    </EmptyCartContainer>
  );
};

const EmptyCartContainer = styled.div`
  .empty {
    .empty__info {
      color: #2f2926;
      top: 12vh;
      right: 15vw;
      font-size: 2.2rem;
      position: absolute;
      z-index: 3;
    }
  }
`;
