import React, { Component } from 'react';
import { motion } from "framer-motion";
import Navigation from '../nav-and-footer/Navigation';
import HomeContent from './HomeContent';
import Footer from '../nav-and-footer/Footer';
import { StyledHome } from './homeStyle';

class Home extends Component {
    render() {
        return(
            <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                exit={{ opacity: 0, y: "-100%" }}
            >
                <Navigation />
                <StyledHome>
                    <HomeContent />
                </StyledHome>
                <Footer />
            </motion.div>
        )
    }
}

export default Home;
