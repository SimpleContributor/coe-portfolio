import React from 'react';
import styled from 'styled-components';
import github from './Images/github.png';
import twitter from './Images/twitter.png';
import linkedin from './Images/linkedin.png';

const StyledFooter = styled.div`
    background-color: #6998B5;
    border-top: 2px solid black;
    bottom: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 120px;
    left: 0;
    padding: 16px 60px;
    position: absolute;
    width: 100vw;

    .created-by{
        align-items: center;
        display: grid;
    }

    p{
        font-size: 1.6rem;
        margin: 0;
    }

    .social-links{
        align-items: center;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        margin-right: 100px;
    }

    .social-links img{
        width: 80px;
    }

    @media (max-width: 1200px){
        grid-template-columns: 1fr 2fr;
    }

    @media (max-width: 768px){
        grid-template-columns: 1fr 3fr;

        

        p{
            align-self: center;
            font-size: 1.2rem;
        }

        .social-links img{
            width: 60px;
        }
    }

    @media (max-width: 500px){
        grid-template-columns: 1fr;
        padding: 16px 0;

        .social-links{
            margin-right: 0;
            padding-right: 10px;
        }

        .created-by p{
            text-align: center;
        }
    }
`

const Footer = () => {

    return (
        <>
            <StyledFooter>
                <div className="created-by">
                    <p>Created by: Caleb Coe</p>
                </div>

                <div className="social-links">
                    <a href="https://github.com/SimpleContributor"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img alt="Github logo link" src={github}></img>
                    </a>

                    <a href="https://twitter.com/caleb_coe"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img alt="Twitter logo link" src={twitter}></img>
                    </a>

                    <a href="https://www.linkedin.com/in/caleb-coe/"
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
