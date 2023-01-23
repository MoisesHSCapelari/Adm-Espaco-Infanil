/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { BoxError, ErrorForm, FormChildren, FormFlex, FormFlexW33, FormFlexW33M1, FormFlexW50, FormFlexW50M1, TextLeft, TextRight, WFull } from './FormsStyles';
import { FaSignOutAlt } from 'react-icons/fa';
import { Diviser } from '../Modals/ModalStyles';

const CreateChildren = yup.object({
  nameChildren: yup.string().required('Nome Não Informado'),
  age: yup.string().required('Idade Não Informada'),
  nameGuardianOne: yup.string().required('Responsavel Não Informado'),
  passwordEntry:yup.string().required('Senha não informada').max(4, 'No mínimo 4 caracteres'),
  passwordOut: yup.string().oneOf([null, yup.ref('passwordEntry')], ' As senhas precisam ser iguais'),
  
});

export default function FormOutChildrenModal(){
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(CreateChildren)
      });
      const onSubmit = data => console.log(data);
    return(
        <>

            <FormChildren onSubmit={handleSubmit(onSubmit)}>
                <BoxError><ErrorForm>{errors.nameChildren?.message}</ErrorForm></BoxError>
                <BoxError><ErrorForm>{errors.age?.message}</ErrorForm></BoxError>
                <BoxError><ErrorForm>{errors.nameGuardianOne?.message}</ErrorForm></BoxError>
                <BoxError><ErrorForm>{errors.passwordEntry?.message}</ErrorForm></BoxError>
                <BoxError><ErrorForm>{errors.passwordOut?.message}</ErrorForm></BoxError>
                    <WFull>
                    <TextLeft>Senha de Saida:</TextLeft>
                    <input type="text" {...register("passwordOut")} placeholder="Senha de Retirada da Criança" />
                    </WFull>

                    <Diviser />
                <TextRight>
                    <button type="submit"><FaSignOutAlt /> Permitir Saida</button>
                </TextRight>
            </FormChildren>
        </>
    )

}