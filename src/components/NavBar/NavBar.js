/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { Diviser, HeaderSidebar, NameSection, NavbarBrand, NavbarLink, NavbarLinks, NavbarWrapper, SidebarLink, SidebarLinks, SidebarWrapper, TitleChurch } from './StyledNavBar';
import { FaStream, FaTimes, FaSignOutAlt, FaChild, FaUserShield, FaRegCalendarAlt, FaFingerprint, FaRegAddressBook,FaRegListAlt, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NavBar(){

    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
        <NavbarWrapper>
          <NavbarBrand>
            <button onClick={() => setIsOpen(!isOpen)}><FaStream /></button>
          </NavbarBrand>
          <TitleChurch>CCB Lavras</TitleChurch>
          <NavbarLinks>
            <NavbarLink><FaSignOutAlt/></NavbarLink>
          </NavbarLinks>
        </NavbarWrapper>

        <SidebarWrapper isOpen={isOpen}>

        <HeaderSidebar>
            <button onClick={() => setIsOpen(!isOpen)}><FaTimes/></button>
        </HeaderSidebar>

        <SidebarLinks>
            <SidebarLink>
                <Link to="/home">
                    <h5><FaHome/> Home</h5>
                </Link>
            </SidebarLink>
        </SidebarLinks>
        
        <Diviser/>
        <NameSection>
            <h4>Cadastros</h4>
        </NameSection>

        <SidebarLinks>
            <SidebarLink>
                
                <Link to="/cadastro/Colaboradoras">
                    <h5><FaUserShield/> Colaboradoras</h5>
                </Link>
                
            </SidebarLink>
            <SidebarLink>
            <Link to="/cadastro/criancas">
                <h5><FaChild/> Crianças</h5>
            </Link>
            </SidebarLink>
        </SidebarLinks>
        <Diviser/>

        <NameSection>
            <h4>Aplicativos Uteis</h4>
        </NameSection>

        <SidebarLinks>
            <SidebarLink>
                <Link to="/home">
                    <h5><FaFingerprint/> Gerador de Senha</h5>
                </Link>
            </SidebarLink>
        </SidebarLinks>
        <Diviser/>
        <NameSection>
            <h4>Espaço Infantil</h4>
        </NameSection>

        <SidebarLinks>
            <SidebarLink>
                <Link to="/espaco-infantil/novo-evento">
                    <h5><FaRegAddressBook/> Novo Registro</h5>
                </Link>
            </SidebarLink>
            <SidebarLink>
                <Link to="=/espaco-infantil/lista-de-eventos">
                    <h5><FaRegListAlt/> lista Registros</h5>
                </Link>
            </SidebarLink>
        </SidebarLinks>

        
        </SidebarWrapper>
        </>
      );

      

}