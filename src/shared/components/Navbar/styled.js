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
  ${(props) =>
    props.navbar ? "box-shadow: 0 0 15px grey;" : "box-shadow: none;"}

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
    /* display: none; */
    list-style-type: none;
    gap: 1rem;

    .fechar {
      display: ${(props) => (!props.mobile ? "none" : "inline")};
      position: relative;
      text-align: right;
      width: 100%;
      padding: 0.5rem 1rem;
      .icon {
        cursor: pointer;
      }
    }

    .item {
      font-size: 1.2rem;
      font-weight: 500;
      padding: 0.5rem 1rem;
      text-align: center;
      font-weight: 500;
      text-decoration: none;
      color: #000;

      &:hover {
        cursor: pointer;
        ${(props) => (props.navbar ? "color: #444444;" : "color: #ffffff;")}
      }
    }
  }

  .mobile-menu {
    display: none;
  }
  /* ============================================================================== */
  @media (max-width: 999px) {
    .mobile-menu {
      display: inline-block;
      position: absolute;
      right: 1rem;
      cursor: pointer;
    }
    nav {
      display: ${(props) => (!props.mobile ? "none" : "block")};
      .nav-list {
        width: 50vw;
        height: 100vh;
        flex-direction: column;
        position: absolute;
        right: -50vw;
        animation: ${(props) => (props.mobile ? "show" : "hide")} 1s ease-in
          forwards;
        animation-iteration-count: 1;

        top: 0;
        gap: 0;
        z-index: 999;
        background-color: #ffffff;
        /* From https://css.glass */
        background: rgba(255, 255, 255, 0.42);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);

        .fechar {
          display: block;
          position: relative;
          text-align: right;
          width: 100%;
          padding: 0.5rem 1rem;
          .icon {
            cursor: pointer;
          }
        }
        .item {
          display: block;
          font-size: 1.3rem;
          &:hover {
            background-color: red;
          }
        }
      }
      @keyframes show {
        from {
          right: -50vw;
        }
        to {
          right: 0;
        }
      }
      @keyframes hide {
        from {
          right: 0;
        }
        to {
          right: -50vw;
        }
      }
    }
  }
`;
