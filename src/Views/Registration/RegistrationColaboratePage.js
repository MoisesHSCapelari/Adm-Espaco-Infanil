import React from 'react';
import { BoxForm } from './RegistrationStyle';
import FormRegistrationColaborate from '../../components/Forms/FormRegistrationColaborate';
import NavBar from '../../components/NavBar/NavBar';

export default function RegistrationColaboratePage(){

    return(
        <>
        <NavBar />
        <BoxForm>
            <FormRegistrationColaborate />
        </BoxForm>
        </>
    );

}