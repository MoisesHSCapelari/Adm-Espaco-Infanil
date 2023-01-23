import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../../Views/LogIn/LoginPage";
import RegistrationChildrenPage from './../../Views/Registration/RegistrationChildrenPage';
import RegistrationColaboratePage from './../../Views/Registration/RegistrationColaboratePage';
import HomePage from './../../Views/Home/HomePage';
import NewEventPage from './../../Views/NewEvent/NewEventPage';
import ListAllEventsPage from './../../Views/NewEvent/ListAllEventsPage';



export default function Routers(){

    return(
        <BrowserRouter>
            <Routes>
                {/*Login e Home*/}
                <Route  path="/" element={<LoginPage />}  />
                <Route  path="/home" element={<HomePage />}  />
                {/*Cadastros*/}
                <Route  path="/cadastro/criancas" element={<RegistrationChildrenPage />}  />
                <Route  path="/cadastro/colaboradoras" element={<RegistrationColaboratePage />}  />
                {/*Aplicativos utteis*/}
                <Route  path="/app/gerador-de-senha" element={<HomePage />}  />
                {/*Espaço Infantil*/}
                <Route  path="/espaco-infantil/novo-evento" element={<NewEventPage />}  />
                <Route  path="/espaco-infantil/lista-de-eventos" element={<ListAllEventsPage />}  />


            </Routes>
        </BrowserRouter>

    );
}