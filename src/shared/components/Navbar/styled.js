import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  ${(props) =>
    props.navbar
      ? "background-color: #ffffff;"
      : "background-color: transparent;"}
  position: fixed;
  z-index: 9900;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 5rem;
  padding: 0.5rem 1rem;
  font-family: "Poppins", sans-serif;

  .logo {
    display: flex;
    gap: 1.5rem;
    align-items: center;

    img {
      width: 4.5rem;
      object-fit: contain;
    }
    h1 {
      text-transform: uppercase;
    }
  }

  .nav-list {
    display: flex;
    list-style-type: none;
    gap: 1rem;

    li {
      font-size: 1.2rem;
      font-weight: 500;
      padding: 0.5rem 1rem;
      text-align: center;
      font-weight: 500;

      &:hover {
        cursor: pointer;
        ${(props) => (props.navbar ? "color: #444444;" : "color: #ffffff;")}
      }
    }
  }

  .mobile-menu {
    display: none;
  }

  @media (max-width: 999px) {
    .mobile-menu {
      display: inline-block;
      position: absolute;
      right: 1rem;
      cursor: pointer;
    }
    nav {
      display: ${(props) => (props.mobile ? "none" : null)} none;
      .nav-list {
        position: absolute;
        right: 0;
        top: 5rem;
        gap: 0;
        flex-direction: column;
        z-index: 99;
        li {
          font-size: 1.3rem;
          background-color: blue;
          &:hover {
            background-color: red;
          }
        }
      }
    }
  }
`;
