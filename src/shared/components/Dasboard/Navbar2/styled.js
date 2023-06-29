import styled from "styled-components";

export const C_Navbar2 = styled.header`
  width: 100vw;
  height: 5rem;
  
  display: flex;
  justify-content: space-around;
  align-items: center;

  nav {
    width: 30%;

    .list {
      display: flex;
      justify-content: space-around;
      .list_item {
        text-decoration: none;
        color: #627c82;
        font-size: 1.3rem;
        cursor: pointer;

        &:hover {
          color: #000000;
        }
      }
    }
  }
`;
