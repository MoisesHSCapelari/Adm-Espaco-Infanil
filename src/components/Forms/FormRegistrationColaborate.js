import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FormColaborate, BoxError, ErrorForm, FormFlex, FormFlexW33, FormFlexW33M1, FormFlexW50, FormFlexW50M1, TextRight } from './FormsStyles';


const createColaborate = yup.object({
    nameColaborate: yup.string().required('Nome Não Informado'),
    maritalStatus:yup.string().required('Estado Civil Não Informado'),
    bDate:yup.date().required('Data de nascimento Não Informado'),
    baptismDate:yup.date().required('Data de Batismo Não Informado'),
    docRG:yup.string().required('RG Não Informado'),
    docCpf:yup.string().required('CPF Não Informado'),
    phone:yup.string().required('Telefone não Informado'),
    address: yup.string().required('Endereço não informado Não Informado'),
    number:yup.string().required('Numero não informado Não Informado'),
    childrens:yup.string().required('Informção de possuir filhos Não Informado'),
    qtdChildrens:yup.string().required('preencher a informação "Quantos Filhos tem?"'),
    ageGroupChildrens:yup.string().required('preencher a informação "Qual a Faixa Etaria dos Filhos?"'),
    profession:yup.string().required('Profissão Não Informado'),
    takeChildren:yup.string().required('preencher a informação "Já trabalhou com Crianças?"'),
    contactChildren:yup.string().required('preencher a informação "Tem contato com Crianças?"'),
    church:yup.string().required('Comum Congregação não Informada'),
    disponibilit:yup.string().required('preencher a informação "Disponibilidade"'),
  });
  
export default function FormRegistrationColaborate(){

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(createColaborate)
      });
      const onSubmit = data => console.log(data);

    return(
        <FormColaborate onSubmit={handleSubmit(onSubmit)}>
            <BoxError><ErrorForm>{errors.nameColaborate?.message}</ErrorForm></BoxError>
            <BoxError><ErrorForm>{errors.maritalStatus?.message}</ErrorForm></BoxError>
            <BoxError><ErrorForm>{errors.bDate?.message}</ErrorForm></BoxError>
            <BoxError><ErrorForm>{errors.baptismDate?.message}</ErrorForm></BoxError>
            <BoxError><ErrorForm>{errors.docRG?.message}</ErrorForm></BoxError>
            <BoxError><ErrorForm>{errors.docCpf?.message}</ErrorForm></BoxError>
            <BoxError><ErrorForm>{errors.phone?.message}</ErrorForm></BoxError>
            <BoxError><ErrorForm>{errors.address?.message}</ErrorForm></BoxError>
            <BoxError><ErrorForm>{errors.number?.message}</ErrorForm></BoxError>
            <BoxError><ErrorForm>{errors.childrens?.message}</ErrorForm></BoxError>
            <BoxError><ErrorForm>{errors.qtdChildrens?.message}</ErrorForm></BoxError>
            <BoxError><ErrorForm>{errors.ageGroupChildrens?.message}</ErrorForm></BoxError>
            <BoxError><ErrorForm>{errors.profession?.message}</ErrorForm></BoxError>
            <BoxError><ErrorForm>{errors.takeChildren?.message}</ErrorForm></BoxError>
            <BoxError><ErrorForm>{errors.contactChildren?.message}</ErrorForm></BoxError>
            <BoxError><ErrorForm>{errors.church?.message}</ErrorForm></BoxError>
            <BoxError><ErrorForm>{errors.disponibilit?.message}</ErrorForm></BoxError>

            <FormFlex>
                <FormFlexW50M1>
                <label>Nome da Colaboradora:</label>
                <input type="text" {...register("nameColaborate")} placeholder="Nome da Colaboradora" />
                </FormFlexW50M1>

                <FormFlexW50>
                <label>Estado Civil:</label>
                <select {...register("maritalStatus")}>
                    <option value="Solteira">Solteira</option>
                    <option value="Casada">Casada</option>
                    <option value="Viuva">Viúva</option>
                    <option value="Divorciada">Divorciada</option>
                </select>
                </FormFlexW50>
            </FormFlex>

            <FormFlex>
                <FormFlexW50M1>
                <label>Data de Nacimento:</label>
                <input type="date" {...register("bDate")} />
                </FormFlexW50M1>

                <FormFlexW50>
                <label>Data de batismo:</label>
                <input type="date" {...register("baptismDate")} />
                </FormFlexW50>

            </FormFlex>

            <FormFlex>
                <FormFlexW33M1>
                <label>RG:</label>
                <input type="text" {...register("docRG")} placeholder="23.456.798-5"/>
                </FormFlexW33M1>
                <FormFlexW33M1>
                <label>CPF:</label>
                <input type="text" {...register("docCpf")} placeholder="Senha de Entrada da Criança"/>
                </FormFlexW33M1>
                <FormFlexW33>
                <label>Telefone:</label>
                <input type="text" {...register("phone")} placeholder="(11) 9 98940-8922"/>
                </FormFlexW33>
            </FormFlex>
            <FormFlex>
                <FormFlexW50M1>
                <label>Endereço:</label>
                <input type="text" {...register("address")} placeholder="Rua Boquira, Jadrim IV Centenário Lavras" />
                </FormFlexW50M1>

                <FormFlexW50>
                <label>Numero:</label>
                <input type="text" {...register("number")} placeholder="33"/>
                </FormFlexW50>
            </FormFlex>

            <FormFlex>
                <FormFlexW33M1>
                <label>Possui FIlhos?</label>
                <select {...register("childrens")}>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select>
                </FormFlexW33M1>
                <FormFlexW33M1>
                <label>Quantos Filhos tem?</label>
                <select {...register("qtdChildrens")}>
                    <option value="0">Não tenho Filhos</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4 ou mais">4 ou mais</option>
                </select>
                </FormFlexW33M1>
                <FormFlexW33>
                <label>Qual a Faixa Etaria dos Filhos?</label>
                <select {...register("ageGroupChildrens")}>
                    <option value="0">Não tenho Filhos</option>
                    <option value="1">de 0 à 3 anos</option>
                    <option value="2">de 4 à 7 anos</option>
                    <option value="3">de 8 à 12 anos</option>
                    <option value="4 ou mais">13 ou mais</option>
                </select>
                </FormFlexW33>
            </FormFlex>

            <FormFlex>
                <FormFlexW50M1>
                <label>Profissão?</label>
                <input type="text" {...register("profession")} placeholder="Engenheiro de Software" />
                </FormFlexW50M1>

                <FormFlexW50>
                <label>Já trabalhou com Crianças?</label>
                <select {...register("takeChildren")}>
                    <option value="Sim">Sim</option>
                    <option value="Nao">Não</option>
                </select>
                </FormFlexW50>
            </FormFlex>

            <FormFlex>
                <FormFlexW33M1>
                <label>Comum Congregação?</label>
                <input type="text" {...register("church")} placeholder="Lavras" />
                </FormFlexW33M1>
                <FormFlexW33M1>
                <label>Tem contato com Crianças</label>
                <select {...register("contactChildren")}>
                    <option value="Sim">Sim</option>
                    <option value="Nao">Não</option>

                </select>
                </FormFlexW33M1>
                <FormFlexW33>
                <label>Disponibilidade</label>
                <select {...register("disponibilit")}>
                    <option value="Sabado">Sabado</option>
                    <option value="Domingo">Domingo</option>
                    <option value="Ambos">Ambos</option>

                </select>
                </FormFlexW33>
            </FormFlex>


            <TextRight>
                <button type="submit">Cadastrar</button>
            </TextRight>
        </FormColaborate>
    );
}