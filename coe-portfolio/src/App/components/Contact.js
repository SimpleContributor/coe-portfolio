import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import ContactForm from './ContactForm';

const ContactWrapper = styled.div`
    background-color: #89be9c;
    display: grid;
    grid-template-rows: 120px 90vh;
    min-height: 80vh;
    overflow-x: hidden;
    padding-top: 150px;
    width: 99vw;

    
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
