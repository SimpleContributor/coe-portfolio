import styled from 'styled-components';

//// CONTACT.JS ////
export const ContactWrapper = styled.div`
    background-color: #ccc;
    overflow-x: hidden;
    width: auto;
`;



//// CONTACTFORM.JS ////
export const FormContainer = styled.div`
    display: grid;
    justify-content: center;
    padding: 80px 0 220px 0;

    .contact-heading {
        text-align: center;
    }

    .contact-heading h1 {
        font-size: 3rem;
        margin-bottom: 12px;
        margin-top: 0;
    }

    .contact-heading p {
        margin-bottom: 48px;
        margin-top: 0;
    }

    .contact-heading p,
    label p {
        font-size: 1.8rem;
    }

    label p {
        margin-bottom: 15px;
        margin-top: 0;
    }


    .contact-form {
        background-color: #aaa;
        border-radius: 10px;
        display: grid;
        grid-template-rows: 1fr 1fr 2fr 1fr;
        height: 600px;
        padding: 30px;
        width: 550px;
    }

    .contact-form div {
        display: grid;
        width: 100%;
    }

    label {
        width: 100%;
    }


    input,
    textarea {
        background-color: #888;
        border: 1px solid #000;
        border-radius: 8px;
        box-sizing: border-box;
        outline: none;
        padding: 10px;
        width: 100%;
    }

    input {
        font-size: 32px;
        height: 60px;
    }

    textarea {
        font-size: 26px;
        height: 70%;
        resize: none;
    }


    button {
        align-self: end;
        background-color: #888;
        box-shadow: 0 5px #000;
        border: solid 2px #000;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1.4rem;
        height: 65px;
        margin-bottom: 10px;
        margin-top: 48px;
        outline: none;
        width: 100%;

        &:active {
            background-color: #bbb;
            opacity: 0.7;
            box-shadow: 0 3px #000;
            transform: translateY(4px);
        }

        &:hover {
            background-color: #bbb;
            opacity: 0.8;
            border-radius: 8px;
        }

        &:focus {
            background-color: #bbb;
            box-shadow: 0 3px #000;
            opacity: 0.8;
            outline: inherit;
            transform: translateY(4px);
        }

        transition: background-color 1s, box-shadow 0.3s, opacity 1s, transform 0.3s;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active,
    input:-internal-autofill-selected,
    input:-internal-autofill-previewed {
        background-color: #888 !important;
        -webkit-box-shadow: 0 0 0 30px #888 inset !important;
    }

    @media (max-width: 768px) {
        .contact-heading {
            width: 540px;
        }
        .contact-form {
            width: 500px;
        }
    }

    @media (max-width: 580px) {
        .contact-heading {
            width: 320px;
        }
        .contact-form {
            width: 280px;
        }

        input,
        textarea {
            font-size: 20px;
        }
    }
`;
