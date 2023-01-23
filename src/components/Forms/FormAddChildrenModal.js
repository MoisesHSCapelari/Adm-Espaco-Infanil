/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { BoxError, ErrorForm, FormChildren, FormFlex, FormFlexW33, FormFlexW33M1, FormFlexW50, FormFlexW50M1, TextLeft, TextRight } from './FormsStyles';
import { FaSignInAlt } from 'react-icons/fa';

const CreateChildren = yup.object({
  nameChildren: yup.string().required('Nome Não Informado'),
  age: yup.string().required('Idade Não Informada'),
  nameGuardianOne: yup.string().required('Responsavel Não Informado'),
  passwordEntry:yup.string().required('Senha não informada').max(4, 'No mínimo 4 caracteres'),
  passwordOut: yup.string().oneOf([null, yup.ref('passwordEntry')], ' As senhas precisam ser iguais'),
  
});

export default function FormAddChildrenModal(){
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
                <FormFlex>
                    <FormFlexW50M1>
                        <TextLeft>Nome da Criança:</TextLeft>
                        <input type="text" {...register("nameChildren")} placeholder="Nome da Criança" />
                    </FormFlexW50M1>

                    <FormFlexW50>
                        <TextLeft>Idade:</TextLeft>
                        <input type="text" {...register("age")} placeholder="Idade" />
                    </FormFlexW50>
                </FormFlex>

                <FormFlex>
                    <FormFlexW33M1>
                        <TextLeft>Nome do Responsavel:</TextLeft>
                        <input type="text" {...register("nameGuardianOne")} placeholder="Nome do Responsavel" />
                    </FormFlexW33M1>

                    <FormFlexW33M1>
                        <TextLeft>Senha de Entrada:</TextLeft>
                        <input type="text" {...register("passwordEntry")} placeholder="Senha de Entrada da Criança"/>
                    </FormFlexW33M1>
                    <FormFlexW33>
                        <TextLeft>Senha de Saida:</TextLeft>
                        <input type="text" {...register("passwordOut")} placeholder="Senha de Retirada da Criança" />
                    </FormFlexW33>
                </FormFlex>

                <TextRight>
                    <button type="submit"><FaSignInAlt /> Permitir Entrada</button>
                </TextRight>
            </FormChildren>
        </>
    )

}