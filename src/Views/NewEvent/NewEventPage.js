import React from 'react';
import { BoxEvent  } from './EventsStyles';
import FormRegistrationEvent from '../../components/Forms/FormRegistrationEvent';
import NavBar from './../../components/NavBar/NavBar';


export default function NewEventPage(){

    return(
        <>
        <NavBar />
            <BoxEvent>
                <FormRegistrationEvent />

            </BoxEvent>
        </>
    );
}