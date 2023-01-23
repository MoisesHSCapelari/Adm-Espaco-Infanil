import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  max-width: 600px;
  min-height: 300px;
  box-shadow: 0px 0px 10px #00000033;
  @media (max-width: 600px) {
    width: 90%;
    min-height: auto;
  }
`;


export const ButtonAdd = styled.button`
    
cursor:pointer;
background: green;
color: white;
border: none;
width: 200px;
height:30px;
border-radius: 60px;
margin: 1rem;
`;

export const ButtonOut = styled.button`
    
cursor:pointer;
background: Red;
color: white;
border: none;
width: 150px;
height:30px;
border-radius: 60px;
margin: 0.3rem;
`;

export const ModalHeader = styled.div`
display: flex;
justify-content: space-between;
`;

export const ButtonCloseHeader = styled.button`
cursor: pointer;
color: black;
text-transform: uppercase;
border: none;
background-color: white;
`;

export const Diviser = styled.hr`
color: black;
font-size: 1.5rem;
`;