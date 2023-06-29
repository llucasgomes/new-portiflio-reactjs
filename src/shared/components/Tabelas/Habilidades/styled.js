import styled from "styled-components";

export const Container_Tabela = styled.table`
  width: 90%;
  height: auto;
  border: 0.1rem solid #aaaaaa;
  border-collapse: collapse;
  font-size: 1rem;
  margin: 3rem auto;

  @media (max-width: 900px) {
    width: 90%;
    margin: 1rem auto;
  }

  thead {
    tr {
      height: 2rem;
      th {
        border: 0.1rem solid #aaaaaa;
        text-align: center;
      }
    }
  }
  tbody {
    tr {
      height: 3rem;
      td {
        border: 0.1rem solid #aaaaaa;
        padding: 1rem;
        text-align: center;
        font-weight: 300;
        .image {
          width: 3rem;
        }
      }

      .btn {
        border: 0;
        border: 0.1rem solid #aaaaaa;
        height: 6rem;
        padding: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .editar {
          width: 2.5rem;
          height: 2rem;
          margin-right: 5px;
          border: none;
          cursor: pointer;
          background-color: transparent;
        }
        .excluir {
          width: 2.5rem;
          height: 2rem;
          margin-left: 5px;
          border: none;
          cursor: pointer;
          background-color: transparent;
        }
      }
    }
  }
`;
