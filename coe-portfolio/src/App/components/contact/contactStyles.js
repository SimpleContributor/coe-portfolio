import styled from 'styled-components';

//// CONTACT.JS ////
export const ContactWrapper = styled.div`
    background-color: #ccc;
    overflow-x: hidden;
    width: 100vw;
`;



//// CONTACTFORM.JS ////
export const FormContainer = styled.div`
    display: grid;
    min-width: 98%;
    justify-content: center;
    padding: 200px 0 220px 0;

    .contact-heading{
        text-align: center;
    }

    .contact-heading h1{
        font-size: 3rem;
        margin-top: 0;
    }

    .contact-heading p,
    label p{
        font-size: 1.6rem;
    }


    .contact-form{
        background-color: #aaa;
        border-radius: 10px;
        display: grid;
        grid-template-rows: 1fr 1fr 2fr 1fr;
        height: 600px;
        padding: 20px;
        width: 550px;
    }

    .contact-form div{
        display: grid;
        width: 100%;
    }

    label{
        width: 100%;
    }

    label p{
        padding-bottom: 5px;
    }


    input,
    textarea{
        background-color: #888;
        border: 1px solid #000;
        border-radius: 8px;
        box-sizing: border-box;
        outline: none;
        padding: 10px;
        width: 100%;
    }

    textarea{
        height: 70%;
        resize: none;
    }


    button{
        align-self: end;
        background-color: #888;
        border: 1.5px solid #000;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1.2rem;
        height: 65px;
        margin-bottom: 10px;
        outline: none;
        width: 100%;
    }

    @media (max-width: 768px) {
        .contact-heading{
            width: 540px;
        }
        .contact-form{
            width: 500px;
        }
    }

    @media (max-width: 580px) {
        .contact-heading{
            width: 320px;
        }
        .contact-form{
            width: 280px;
        }
    }
`;
