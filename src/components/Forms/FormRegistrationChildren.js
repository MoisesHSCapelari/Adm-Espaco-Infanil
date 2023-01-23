/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { BoxError, ErrorForm, FormChildren, FormFlex, FormFlexW33, FormFlexW33M1, FormFlexW50, FormFlexW50M1, TextRight } from './FormsStyles';

const CreateChildren = yup.object({
  nameChildren: yup.string().required('Nome Não Informado'),
  nameGuardianOne: yup.string().required('Responsavel Não Informado'),
  nameGuardianTwo: yup.string().optional(),
  phone: yup.string().required('Telefone do responsavel nao informado Não Informado'),
  passwordEntry:yup.string().required('Senha não informada').min(4, 'No mínimo 4 caracteres'),
  passwordOut: yup.string().oneOf([null, yup.ref('passwordEntry')], ' As senhas precisam ser iguais'),
  age: yup.string().required('Idade Não Informada'),
});

export default function FormRegistrationChildren(){
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
                <BoxError><ErrorForm>{errors.phone?.message}</ErrorForm></BoxError>
                <BoxError><ErrorForm>{errors.passwordEntry?.message}</ErrorForm></BoxError>
                <BoxError><ErrorForm>{errors.passwordOut?.message}</ErrorForm></BoxError>
                <FormFlex>
                    <FormFlexW50M1>
                    <label>Nome da Criança:</label>
                    <input type="text" {...register("nameChildren")} placeholder="Nome da Criança" />
                    </FormFlexW50M1>

                    <FormFlexW50>
                    <label>idade:</label>
                    <input type="text" {...register("age")} placeholder="Idade" />
                    </FormFlexW50>
                </FormFlex>

                <FormFlex>
                    <FormFlexW33M1>
                    <label>Nome do Responsavel:</label>
                    <input type="text" {...register("nameGuardianOne")} placeholder="Nome do Responsavel 1" />
                    </FormFlexW33M1>

                    <FormFlexW33M1>
                    <label>Nome do Responsavel:</label>
                    <input type="text" {...register("nameGuardianTwo")} placeholder="Nome do Responsavel 2" />
                    </FormFlexW33M1>
                    <FormFlexW33>
                    <label>Telefone:</label>
                    <input type="text" {...register("phone")} placeholder="Telefone do Responsavel"/>
                    </FormFlexW33>
                </FormFlex>

                <FormFlex>
                    <FormFlexW50M1>
                    <label>Senha de Entrada:</label>
                    <input type="text" {...register("passwordEntry")} placeholder="Senha de Entrada da Criança"/>
                    </FormFlexW50M1>

                    <FormFlexW50>
                    <label>Senha de Saida:</label>
                    <input type="text" {...register("passwordOut")} placeholder="Senha de Retirada da Criança" />
                    </FormFlexW50>
                </FormFlex>
                <TextRight>
                    <button type="submit">Cadastrar</button>
                </TextRight>
            </FormChildren>
        </>
    )

}