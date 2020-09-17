import React, { Component } from 'react';
import Navigation from './Navigation';
import ProjectsContent from './ProjectsContent';

class Projects extends Component {
    render() {
        return(
            <div>
                <Navigation />
                <ProjectsContent />
            </div>
        )
    }
}

export default Projects;
