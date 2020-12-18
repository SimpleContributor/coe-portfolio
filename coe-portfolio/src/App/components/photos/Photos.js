import React, { Component } from 'react';
import ProjectsContent from './ProjectsContent';
import { ProjectsWrapper } from './photosStyle';

class Projects extends Component {
    render() {
        return(
            <ProjectsWrapper>
                <ProjectsContent />
            </ProjectsWrapper>
        )
    }
}

export default Projects;
