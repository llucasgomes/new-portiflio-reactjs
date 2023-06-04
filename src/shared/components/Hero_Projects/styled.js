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
