import styled from "styled-components";


export const FormChildren = styled.form`

    label{
        padding-left: 0.7rem;
    }
    input[type=text],
    input[type=password]{
        padding-left: 0.7rem;
        width: 100%;
	    height:30px;
	    border: 1px solid whitesmoke;
	    padding-left: 8px;
	    margin-top:8px;
    }

    button{
        cursor:pointer;
        background: DeepSkyBlue;
        border: none;
        width: 150px;
        height:30px;
        border-radius: 60px;
        margin: 1rem;

    }
`;

export const BoxError = styled.div`

    display:block;
    margin-bottom: 1rem;
    text-align: center;
`;
export const ErrorForm = styled.span`
    font-weight: bold;
    color: red;
    
`;


export const TextRight = styled.div`
    text-align: right;

`;

export const TextLeft = styled.div`
    text-align: left;
    padding-left: 0.7rem;

`;
export const TextCenter = styled.div`
    text-align: center;
    padding-left: 0.7rem;

`;

export const FormFlex = styled.div`
    display:flex
`;
//----Divisão de Flex-------
export const FormFlexW50M1 = styled.div`
    width: 49%;
    margin-right: 1.5rem;
    padding-bottom:1.5rem;

`;
export const FormFlexW50 = styled.div`
    width: 49%;
    padding-bottom:1.5rem;
`;
export const WFull = styled.div`
    width: 100%;
    padding-bottom:1.5rem;
`;


export const FormFlexW33M1 = styled.div`
    width: 33%;
    margin-right: 1rem;
    padding-bottom:1.5rem;

`;
export const FormFlexW33 = styled.div`
    width: 33%;
    padding-bottom:1.5rem;

`;

// ------- Colaborate--------------

export const FormColaborate = styled.form`

    label{
        padding-left: 0.7rem; 
        padding-right:0.7rem;
    }
    input[type=text],
    input[type=date]{
        padding-left: 0.7rem;
        width: 100%;
	    height:30px;
	    border: 1px solid whitesmoke;
	    padding-left: 8px;
	    margin-top:8px;
    }
    select{
        padding-left: 0.7rem;
        width: 100%;
	    height:30px;
	    border: 1px solid whitesmoke;
	    padding-left: 8px;
	    margin-top:8px;

        option{
            height:30px;
        }
    }
    

    button{
        cursor:pointer;
        background: DeepSkyBlue;
        border: none;
        width: 120px;
        height:30px;
        border-radius: 60px;
        margin: 1rem;

    }
`;


// ------- Colaborate--------------

export const FormEvents = styled.form`

    label{
        padding-left: 0.7rem; 
        padding-right:0.7rem;
    }
    input[type=text],
    input[type=date]{
        padding-left: 0.7rem;
        width: 100%;
	    height:30px;
	    border: 1px solid whitesmoke;
	    padding-left: 8px;
	    margin-top:8px;
    }
    select{
        padding-left: 0.7rem;
        width: 100%;
	    height:30px;
	    border: 1px solid whitesmoke;
	    padding-left: 8px;
	    margin-top:8px;

        option{
            height:30px;
        }
    }
    

    button{
        cursor:pointer;
        background: DeepSkyBlue;
        border: none;
        width: 120px;
        height:30px;
        border-radius: 60px;
        margin: 1rem;

    }
`;
