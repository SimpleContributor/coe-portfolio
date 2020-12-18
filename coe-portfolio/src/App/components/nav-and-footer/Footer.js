import React from 'react';
import github from '../Images/github.png';
import twitter from '../Images/twitter.png';
import linkedin from '../Images/linkedin.png';
import { StyledFooter } from './style';

const Footer = () => {

    return (
        <>
            <StyledFooter>
                <div className="created-by">
                    <p>Created by: Caleb Coe</p>
                </div>

                <div className="social-links">
                    <a href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img alt="Github logo link" src={github}></img>
                    </a>

                    <a href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img alt="Twitter logo link" src={twitter}></img>
                    </a>

                    <a href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img alt="LinkedIn logo link" src={linkedin}></img>
                    </a>
                </div>
            </StyledFooter>
        </>
    ) 
}

export default Footer;
