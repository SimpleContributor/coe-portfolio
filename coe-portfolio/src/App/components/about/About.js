import React, { Component } from 'react';
import AboutContent from './AboutContent';
import { StyledAbout } from './aboutStyles';

class About extends Component {
    render() {
        return (
            <StyledAbout>
                <AboutContent />
            </StyledAbout>
        )
    }
}

export default About;
