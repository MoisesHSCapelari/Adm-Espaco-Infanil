/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { BoxError, ErrorForm, FormEvents, FormFlex, FormFlexW50, FormFlexW50M1, TextRight } from './FormsStyles';

const CreateChildren = yup.object({
  children: yup.string().required('Nome da Criança Não Informado'),
  guardianDay: yup.string().required('Responsavel Não Informado'),
  history:yup.string().required('História Não Informado'),
  contadora:yup.string().required('Responsavel pela história Não Informada'),
  gruop:yup.string().required('Grupo Não Informado'),
  dateHistoriy:yup.date().required('Data não Informada'),


});

export default function FormRegistrationEvent(){
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(CreateChildren)
      });
      const onSubmit = data => console.log(data);
    return(
        <>

            <FormEvents onSubmit={handleSubmit(onSubmit)}>
                <BoxError><ErrorForm>{errors.children?.message}</ErrorForm></BoxError>
                <BoxError><ErrorForm>{errors.guardianDay?.message}</ErrorForm></BoxError>
                <BoxError><ErrorForm>{errors.nameGuardianOne?.message}</ErrorForm></BoxError>
                <BoxError><ErrorForm>{errors.history?.message}</ErrorForm></BoxError>
                <BoxError><ErrorForm>{errors.gruop?.message}</ErrorForm></BoxError>
                <BoxError><ErrorForm>{errors.contadora?.message}</ErrorForm></BoxError>
                <BoxError><ErrorForm>{errors.dateHistoriy?.message}</ErrorForm></BoxError>

                <FormFlex>
                    <FormFlexW50M1>
                    <label>Historia Contada:</label>
                    <input type="text" {...register("history")} placeholder="Vida de Moisés" />
                    </FormFlexW50M1>

                    <FormFlexW50>
                    <label>Responsavel por Contar:</label>
                    <input type="text" {...register("contadora")} placeholder="Edna"/>
                    </FormFlexW50>
                </FormFlex>

                <FormFlex>
                    <FormFlexW50M1>
                    <label>Grupo:</label>
                    <select {...register("gruop")}>
                        <option value="Grupo 1 - Luciane">Grupo 1 - Luciane</option>
                        <option value="Grupo 2 - Loreane">Grupo 2 - Loreane</option>
                    </select>
                    </FormFlexW50M1>

                    <FormFlexW50>
                    <label>Data da Historia:</label>
                    <input type="date" {...register("dateHistoriy")} />
                    </FormFlexW50>
                </FormFlex>
                <TextRight>
                    <button type="submit">Cadastrar</button>
                </TextRight>
            </FormEvents>
        </>
    )

}