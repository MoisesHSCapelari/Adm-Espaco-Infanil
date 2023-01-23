import styled from "styled-components";


export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  background-color: #f5f5f5;
  box-shadow: 0px 2px 10px #00000033;
  width: 100%;

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const NavbarBrand = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-left: 20px;
  button{
        background-color: #f5f5f5;
        border: none;
        font-size:1.5rem;
        cursor:pointer;
        padding-right: 1rem;
    }

  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

export const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  margin-right: 20px;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-right: 0;
  }
`;

export const NavbarLink = styled.li`
  margin: 0 10px;
  font-size: 1.2em;

  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    margin: 10px 0;
  }
`;

//------------------------Sidebar--------------

export const SidebarWrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: Gainsboro;
  z-index: 999;
  overflow-y: auto;
  box-shadow: 2px 0px 10px #00000033;
  transition: all 0.5s ease-in-out;
  transform: ${props => (props.isOpen ? "translateX(0)" : "translateX(-100%)")};


  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const HeaderSidebar = styled.div`
    color:black;
    justify-content: space-between;
    text-align: right;

    button{
        background-color: Gainsboro;
        border: none;
        font-size:1.5rem;
        cursor:pointer;
        padding: 1rem;
    }
`;

export const TitleChurch = styled.h2`
    color:black;
    text-align: center;
    font-size:1.5rem;
    padding-left: 1rem;
`;

export const Diviser = styled.hr`
    color: black;
    font-size: 1.5rem;

`;

export const NameSection = styled.div`
    color: black;
    font-size: 1.3rem;
    text-align: left;
    padding-left: 1rem;
`;

export const SidebarLinks = styled.ul`
  list-style: none;
  display: block;
  @media (max-width: 800px) {
    justify-content: center;
    margin-right: 0;
  }
`;

export const SidebarLink = styled.li`
  padding-left: 0.5rem;
  font-size: 1.2em;
  color:black !important;
  text-decoration: none;
  cursor:pointer;
  &:hover{
    color:Gray;
  }

  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    margin: 10px 0;
  }
`;