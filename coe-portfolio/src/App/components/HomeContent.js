import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Portrait from './Images/portrait-small.png';
import PortraitGif from './Images/portrait-small-gif.gif';

const StyledWrapper = styled.div`
    background-color: #89be9c;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 200px 200px;
    margin-top: 120px;
    padding-bottom: 100px;
    width: 100%;

    div.intro-container{
        grid-column-start: 1;
        grid-column-end: 2;
    }

    div.greeting{
        display: flex;
        width: 100%;
    }

    h1{
        align-self: center;
        font-size: 3rem;
        margin: 30px 0 30px 30px;
        width: 75%;
    }

    h1.intro-pc{
        display: block;

        @media (max-width: 768px){
            display: none;
        }
    }

    h1.intro-mobile{
        display: none;

        @media (max-width: 768px){
            display: block;
        }
    }

    p{
        font-size: 1.5rem;
        margin: 0 0 30px 30px;
        padding: 15px 0;
        width: 90%;
    }

    .project-link,
    .contact-link{
        background-color: #99e9ff;
        border: 2px solid black;
        border-radius: 10px;
        color: #000;
        grid-column-start: 1;
        grid-column-end: 2;
        height: 80%;
        margin-left: 30px;
        text-decoration: none;
        width: 90%;
    }

    div.button{
        align-items: center;
        display: grid;
        font-size: 2rem;
        height: 100%;
        justify-items: center;
        width: 100%;
    }

    div.pixel-portrait{
        display: grid;
        justify-items: end;
        width: 25%;
    }

    div.pixel-portrait img{
        
        width: 135px;
    }

`

function HomeContent() {
    const [ishovered, setIshovered] = useState(false);

        return (
            <>
            <StyledWrapper>
                <div className="intro-container">
                    <div className="greeting">
                        <h1 className="intro-pc">Welcome to my website!</h1>
                        <h1 className="intro-mobile">Welcome!</h1>
                        <div className="pixel-portrait">
                            <img alt="Pixel art portrait of Caleb"
                                onMouseEnter={() => setIshovered(true)}
                                onMouseLeave={() => setIshovered(false)}
                                src={ishovered ? PortraitGif : Portrait} >
                            </img>
                        </div>
                        
                        
                    </div>
                    
                    <p>My name is Caleb. I have been a carpenter for 8 years, but I have always been drawn to development. 
                    Starting in August 2019, I began learning programming. </p>
                </div>
                <Link className="project-link" to="/Projects">
                    <div className="button">Projects</div>
                </Link>
                <Link className="contact-link" to="/">
                    <div className="button">Contact</div>
                </Link>
                
                
            </StyledWrapper>
            </>
        )
}

export default HomeContent;
