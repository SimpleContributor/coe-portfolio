import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import ContactForm from './ContactForm';

const ContactWrapper = styled.div`
    background-color: #8eb1c7;
    display: grid;
    grid-template-rows: 120px 90vh;
    min-height: 100vh;
    overflow-x: hidden;
    padding-top: 120px;
    width: 100vw;

    @media (max-width: 768px){
        min-height: 950px;
    }
`

const Contact = () => {

        return (
            <>
                <ContactWrapper>
                    <Navigation />
                    <ContactForm />
                </ContactWrapper>
            </>
        )
    
}

export default Contact;
