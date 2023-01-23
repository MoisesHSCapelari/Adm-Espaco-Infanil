import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import TableAllEvents from '../../components/Tables/TableAllEvents';
import { BoxEventSingle } from './EventsStyles';

export default function ListAllEventsPage(){

    return(
        <>
            <NavBar />


            <BoxEventSingle>
                <TableAllEvents />
            </BoxEventSingle>
            
        </>
    );


}