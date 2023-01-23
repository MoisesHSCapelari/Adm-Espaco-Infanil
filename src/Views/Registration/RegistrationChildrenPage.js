import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { BoxForm } from './RegistrationStyle';
import FormRegistrationChildren from '../../components/Forms/FormRegistrationChildren';


export default function RegistrationChildrenPage(){

    return(
        <>
            <NavBar />

            <BoxForm>
                <FormRegistrationChildren />
            </BoxForm>
        </>
    );
}