import styled from "styled-components";


export const MainHome = styled.main`
    max-width: 1280px;
    padding-top: 70px;
    display: flex;
    margin: 0 auto;
`;

export const CardInfoChildren = styled.div`
    width: 33%;
    height:100px;
    background-color: SpringGreen;
    margin: 1rem;
`;
export const CardInfoColoaborate = styled.div`
    width: 33%;
    height:100px;
    background-color: DarkSeaGreen;
    margin: 1rem;
`;
export const CardInfoEvents = styled.div`
    width: 33%;
    height:100px;
    background-color: PaleGreen;
    margin: 1rem;
`;

export const CardTitle = styled.h3`
    text-align: center;
    color: black
    font-size: 1rem;
`;

export const CardBody = styled.h4`
    text-align: center;
    color: black
    font-size: 1rem;
    font-weight: normal;

    b{
        font-weight: bold;
    }
`;


export const Ministry = styled.div`
    width: 50%;
    height:auto;
    background-color: whitesmoke;
    margin: 0 auto;
`;