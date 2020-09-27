import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import ProjectsContent from './ProjectsContent';
import Footer from './Footer';

const ProjectsWrapper = styled.div`
    background-color: #8eb1c7;
    display: grid;
    width: 100vw;
    min-height: 1600px;
    overflow-x: hidden;
    
    @media (max-width: 1200px){
        min-height: 2000px;
    }

    @media (max-width: 768px){
        min-height: 3200px;
    }
`

class Projects extends Component {
    render() {
        return(
            <ProjectsWrapper>
                <Navigation />
                <ProjectsContent />
                <Footer />
            </ProjectsWrapper>
        )
    }
}

export default Projects;
