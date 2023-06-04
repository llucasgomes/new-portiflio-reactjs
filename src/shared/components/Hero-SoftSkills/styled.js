import styled from "styled-components";

export const C_Hero_Soft = styled.section`
  width: 100vw;
  height: calc(100vh - 5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;

  .container.image {
    width: 40%;
    height: 70%;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .container.soft {
    width: 40%;
    .title {
      margin-bottom: 1rem;
    }

    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      padding: 0.2rem 0;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;

    .container.soft,
    .container.image {
      width: 90%;
    }
    .container.soft {
      padding: 0 1rem;
    }
    .container.image {
      display: none;
    }
  }
`;
