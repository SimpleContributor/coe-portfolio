import React, { Component } from 'react';
import ProjectsContent from './ProjectsContent';
import { motion } from "framer-motion";

import Navigation from '../nav-and-footer/Navigation';
import Footer from '../nav-and-footer/Footer';
import { ProjectsWrapper } from './photosStyle';


class Projects extends Component {
    render() {
        return(
            <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                exit={{ opacity: 0, y: "-100%" }}
            >
                <Navigation />
                <ProjectsWrapper>
                    <ProjectsContent />
                </ProjectsWrapper>
                <Footer />
            </motion.div>
        )
    }
}

export default Projects;
