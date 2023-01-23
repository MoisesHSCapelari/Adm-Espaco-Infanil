import React from "react";
import { InfoEvent, TableWrapper } from "./TablesStyles";
import ModalOutChildren from './../Modals/ModalOutChildren';

export default function TableEventsChildren() {
  return (
    <>      
    
    <InfoEvent>
    <h4><b>História Contada:</b> Vida de Moisés</h4>
    <h4><b>Responsavel Pela História:</b> Edna</h4>
    <h4><b>Grupo:</b> Grupo 1 - Luciane</h4>
    <h4><b>Toal de Crianças:</b> 35</h4>
    </InfoEvent>

    <br />
    <br />
    <br />

    <TableWrapper>

      <thead>
        <tr>
          <th>Nome da Criança</th>
          <th>Idade da Criança</th>
          <th>Nome do Responsável do dia</th>
          <th>Retirar Criança</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hadassah Samira</td>
          <td>2 anos</td>
          <td>Karem Samira</td>
          <td><ModalOutChildren /></td>
        </tr>

      </tbody>
    </TableWrapper>
    </>
  );
}
