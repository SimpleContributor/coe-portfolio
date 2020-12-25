import React from 'react';
import ContactForm from './ContactForm';
import { motion } from "framer-motion";

import Navigation from '../nav-and-footer/Navigation';
import Footer from '../nav-and-footer/Footer';
import { ContactWrapper } from './contactStyles';

const Contact = () => {

        return (
            <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                exit={{ opacity: 0, y: "-100%" }}
            >
                <Navigation />
                <ContactWrapper>
                    <ContactForm />
                </ContactWrapper>
                <Footer />
            </motion.div>
        )
    
}

export default Contact;
