import React from 'react';
import { BoxEventSingle, TextRight } from './EventsStyles';
import NavBar from './../../components/NavBar/NavBar';
import ModalAddChildren from '../../components/Modals/ModalAddChildren';
import TableEventsChildren from '../../components/Tables/TableEventsChildren';

export default function EventSinglePage(){

        return(
            <>
            <NavBar />
                <BoxEventSingle>
                    <TextRight>
                        <ModalAddChildren />
                    </TextRight>

                    <TableEventsChildren />
                </BoxEventSingle>
            </>
        );
}