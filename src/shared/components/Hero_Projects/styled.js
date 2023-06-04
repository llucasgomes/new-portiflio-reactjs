import styled from "styled-components";

export const C_Projects = styled.section`
  width: 100vw;
  height: calc(100vh - 5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
  background-color: #525e68;

  .container {
    max-width: 80%;
    margin: 0 auto;

    background-color: red;
  }
  .carrousel {
    cursor: grab;
    overflow: hidden;
  }
  .inner {
    display: flex;
  }
  .item {
    min-height: 200px;
    min-width: 400px;
    padding: 14px;
  }
  .item img {
    width: 100%;
    height: 90%;
    border-radius: 12px;
    pointer-events: none;
  }
`;

export const Container_Portifolio = styled.div`
  width: 100%;

  padding: 2rem;

  .title {
    width: 100%;
    text-align: center;
    margin-bottom: 0.6rem;
  }
  .sub-title {
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .container-skills {
    max-width: 100%;
    height: 100%;
    padding: 2rem 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`;
