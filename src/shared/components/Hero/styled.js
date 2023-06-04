import styled from "styled-components";

export const C_Hero = styled.section`
  width: 100vw;
  //height: calc(100vh - 5rem);
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    position: absolute;
    z-index: 2;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background-color: rgba(128, 139, 150, 0.6);
  }
  video {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .container {
    position: absolute;
    z-index: 3;
    width: 50%;

    .title {
      font-size: 3rem;
      font-weight: 800;
      line-height: 3.4rem;
      text-transform: uppercase;
      span {
        font-weight: 600;
        font-size: 1.9rem;
      }
    }
    .paragrafo {
      margin-bottom: 4rem;
      margin-top: 2rem;
    }
  }

  @media (max-width: 999px) {
    .container {
      width: 80%;
    }
  }
  @media (max-width: 600px) {
    .container {
      .title {
        font-size: 2rem;
        font-weight: 800;
        line-height: 2.4rem;
        text-transform: uppercase;
        span {
          font-weight: 600;
          font-size: 1.6rem;
        }
      }
      .paragrafo {
        margin-bottom: 4rem;
        margin-top: 2rem;
      }
    }
  }
`;

export const Btn_Download = styled.a`
  width: 10rem;
  height: 3rem;
  gap: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: solid 2px #000000;
  text-decoration: none;
  color: #000000;
`;
