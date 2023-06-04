import styled from "styled-components";
import Background from "../../../assets/images/power_bg.jpg";

export const C_Hero_Skills = styled.section`
  width: 100vw;
  //height: calc(100vh - 5rem);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
  background-image: url(${Background});
  .container.content {
    width: 30%;
    height: 70%;
    display: flex;
    flex-direction: column;
    padding: 3rem 2rem;

    color: #ffffff;

    .title {
      margin-bottom: 2rem;
    }
  }
  .container.images {
    width: 50%;
    height: 70%;
    ul {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(5, auto);
      grid-template-rows: repeat(3, auto);
      gap: 0.5rem;
      padding: 0.5rem;

      .item {
        list-style-type: none;
        border-radius: 0.8rem;
      }
      .item:nth-child(1) {
        background: url(${(props) => props.js}) center center no-repeat;
        background-color: #ffffff;
        background-size: contain;
        grid-area: 1/1/3/3;
      }
      .item:nth-child(2) {
        background: url(${(props) => props.agil}) center center no-repeat;
        background-color: transparent;
        border: solid 2px #ffffff;
        background-size: contain;
        grid-area: 3/1/4/3;
      }
      .item:nth-child(3) {
        background: url(${(props) => props.ts}) center center no-repeat;
        background-color: #ffffff;
        background-size: contain;
        grid-area: 1/3/2/5;
      }
      .item:nth-child(4) {
        background: url(${(props) => props.html}) center center no-repeat;
        background-color: #ffffff;
        background-size: contain;
        grid-area: 2/3/4/5;
      }
      .item:nth-child(5) {
        background: url(${(props) => props.angular}) center center no-repeat;
        background-color: #ffffff;
        background-size: contain;
        grid-area: 2/5/3/6;
      }
      .item:nth-child(6) {
        background: url(${(props) => props.react}) center center no-repeat;
        background-color: transparent;
        background-size: contain;
        animation: sun 3s ease-in-out infinite;
        grid-area: 3/5/4/6;

        @keyframes sun {
          from {
            //box-shadow: 0px 0px 10px 2px #ffe130;
            transform: rotate(0deg);
          }
          to {
            //box-shadow: 0px 0px 20px 2px #ffe130;
            transform: rotate(180deg);
          }
        }
      }
      .item:nth-child(7) {
        background: url(${(props) => props.vue}) center center no-repeat;
        background-color: #ffffff;
        background-size: contain;
        grid-area: 1/5/2/6;
      }
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    .container.content {
      height: 50%;
    }
    .container.content,
    .container.images {
      width: 90%;
    }
  }
`;
