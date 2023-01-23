import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { CardBody, CardInfoChildren, CardInfoColoaborate, CardInfoEvents, CardTitle, Ministry, MainHome } from './HomeStyles';

export default function HomePage(){

    return(
        <>
            <NavBar />

            <MainHome>
                <CardInfoChildren>
                    <CardTitle>Crianças Cadastradas</CardTitle>
                    <CardBody>28</CardBody>
                </CardInfoChildren>
                <CardInfoColoaborate>
                    <CardTitle>Colaboradoras Cadastradas</CardTitle>
                    <CardBody>28</CardBody>
                </CardInfoColoaborate>
                <CardInfoEvents>
                    <CardTitle>Registro de Eventos</CardTitle>
                    <CardBody>28</CardBody>
                </CardInfoEvents>
            </MainHome>
            <br/>
            <br/>
            <br/>
            <Ministry>
                <br />
                <CardBody><b>Ancião:</b> Josué Mendes</CardBody>
                <CardBody><b>Diácono:</b> Manoel Darci Santana</CardBody>
                <CardBody><b>Cooperador do oficio Ministerial:</b> José Paulo dos Santos</CardBody>
                <CardBody><b>Encarregado Local:</b> Osvaldo Vilella</CardBody>
                <CardBody><b>Encarregado Regional:</b> Benjamin</CardBody>
                <br/>
            </Ministry>
        </>
    );
}