import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import ContactForm from './ContactForm';
import Footer from './Footer';

const ContactWrapper = styled.div`
    background-color: #8eb1c7;
    display: grid;
    grid-template-rows: 120px 90vh;
    min-height: 1050px;
    overflow-x: hidden;
    padding-top: 120px;
    width: 100vw;

    @media (max-width: 768px){
        min-height: 1150px;
    }
`

const Contact = () => {

        return (
            <>
                <ContactWrapper>
                    <Navigation />
                    <ContactForm />
                    <Footer />
                </ContactWrapper>
            </>
        )
    
}

export default Contact;
