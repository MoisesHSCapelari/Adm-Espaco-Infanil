/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { BoxError, ErrorForm, FormChildren, FormFlex, FormFlexW33, FormFlexW33M1, FormFlexW50, FormFlexW50M1, TextCenter, TextLeft, TextRight, WFull } from './FormsStyles';
import { FaSignInAlt } from 'react-icons/fa';
import { Diviser } from '../Modals/ModalStyles';

const ValidationLoginSchemma = yup.object({
  user: yup.string().required('Usuario Não Informado'),
  password:yup.string().required('Senha não informada').min(6, 'No mínimo 6 caracteres'),
  
});

export default function FormLogin(){
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(ValidationLoginSchemma)
      });
      const onSubmit = data => console.log(data);
    return(
        <>

            <FormChildren onSubmit={handleSubmit(onSubmit)}>
                <BoxError><ErrorForm>{errors.user?.message}</ErrorForm></BoxError>
                <BoxError><ErrorForm>{errors.password?.message}</ErrorForm></BoxError>

                    <WFull>
                    <TextLeft>Uusário:</TextLeft>
                    <input type="text" {...register("user")} placeholder="Usuário" />
                    </WFull>

                    <WFull>
                    <TextLeft>Senha de Saida:</TextLeft>
                    <input type="password" {...register("password")} placeholder="Senha" />
                    </WFull>

                    <Diviser />
                    <TextCenter>
                        <button type="submit"><FaSignInAlt /> Entrar</button>
                    </TextCenter>
            </FormChildren>
        </>
    )

}