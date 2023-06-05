import styled from "styled-components";

export const C_Footer = styled.footer`
  width: 100vw;
  height: auto;
  padding-top: 3rem;
  color: #ffffff;
  background-color: #111;

  .footer-content {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h3 {
      font-size: 1.8rem;
      text-transform: capitalize;
      font-weight: 300;
    }
    p {
      max-width: 50rem;
      margin: 1rem auto;

      font-size: 1.3rem;
    }
  }
  .sociais {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0 1.5rem 0;

    .sociais--item {
      margin: 0 1rem;
      cursor: pointer;
    }
  }
  .footer-bottom {
    width: 100vw;
    background-color: #000;
    text-align: center;
    padding: 1rem 0;
    position: relative;

    .login {
      position: absolute;
      width: 50px;
      background-color: #000;
      cursor: pointer;
      right: 50px;
      top: 50%;
      color: #000;
    }
  }
`;
