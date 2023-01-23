import styled from "styled-components"


export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead tr th {
    background-color: #f5f5f5;
    padding: 10px;
    text-align: left;
    font-weight: bold;

    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  tbody tr td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  @media (max-width: 600px) {
    thead tr {
      display: none;
    }

    tbody tr td {
      display: block;
      width: 100%;
      text-align: right;
      &:before {
        display: inline-block;
        font-weight: bold;
        width: 50%;
      }
    }
  }
`;


export const InfoEvent = styled.div`
  text-align: left;
  font-size: 1rem;

  h4{
    font-weight: normal;
  }
  b{
     font-weight: bold;
    }

`;