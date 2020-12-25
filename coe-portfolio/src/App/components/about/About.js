import React, { Component } from 'react';
import AboutContent from './AboutContent';
import { motion } from "framer-motion";

import Navigation from '../nav-and-footer/Navigation';
import Footer from '../nav-and-footer/Footer';
import { StyledAbout } from './aboutStyles';

class About extends Component {
    render() {
        return (
            <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                exit={{ opacity: 0, y: "-100%" }}
            >
                <Navigation />
                <StyledAbout>
                    <AboutContent />
                </StyledAbout>
                <Footer />
            </motion.div>
        )
    }
}

export default About;
