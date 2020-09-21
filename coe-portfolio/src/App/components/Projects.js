import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import ProjectsContent from './ProjectsContent';

const ProjectsWrapper = styled.div`
    background-color: #8eb1c7;
    display: grid;
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;


`

class Projects extends Component {
    render() {
        return(
            <ProjectsWrapper>
                <Navigation />
                <ProjectsContent />
            </ProjectsWrapper>
        )
    }
}

export default Projects;
