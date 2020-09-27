import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Portrait from './Images/portrait-small.png';
import PortraitGif from './Images/portrait-small-gif.gif';

const StyledWrapper = styled.div`
    background-color: #8eb1c7;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 200px 200px;
    line-height: 1.6;
    padding-bottom: 100px;
    width: 100%;

    @media (max-width: 500px){
        grid-template-columns: 1fr;
        grid-template-rows: auto 120px 120px;
        line-height: 1.8;
    }
    

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
        margin: 30px 0 30px 60px;
        width: 75%;

        @media (max-width: 768px){
            width: 220px;
        }

        @media (max-width: 500px){
            font-size: 2.4rem;
            margin-left: 30px;
            width: 170px;
        }
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

    div.pixel-portrait{
        align-items: center;
        display: grid;
        justify-items: end;
        width: 145px;

        @media (max-width: 500px){
            width: 100px;
        }
    }

    div.pixel-portrait img{
        width: 135px;

        @media (max-width: 500px){
            width: 90px;
        }
    }

    p{
        font-size: 1.5rem;
        margin: 0 0 30px 60px;
        padding: 15px 0;
        width: 90%;

        @media (max-width: 500px){
            font-size: 1.1rem;
            margin-left: 30px;
            width: 310px;
        }
    }

    .project-link,
    .contact-link{
        background-color: #E68860;
        border: 2px solid black;
        border-radius: 10px;
        color: #000;
        grid-column-start: 1;
        grid-column-end: 2;
        height: 130px;
        margin-left: 60px;
        text-decoration: none;
        width: 455px;

        @media (max-width: 500px){
            height: 100px;
            margin-left: 30px;
            width: 290px;
        }
    }

    div.button{
        align-items: center;
        display: grid;
        font-size: 2rem;
        height: 100%;
        justify-items: center;
        width: 100%;

        
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
                    
                    <p>My name is Caleb Coe. I have done carpentry for 8 years, but programming is something that has 
                        been on the back of my mind for quite some time. Around August 2019 I decided to make learning 
                        how to program a priority. I stumbled across the website freeCodeCamp.org, and started learning 
                        the basics of HTML and CSS. After a month of that I mixed in JavaScript. Since then I have been 
                        learning and practicing front-end and back-end development. Some of my work can be seen by 
                        clicking the Projects button. Click the Contact button and fill out the form to get in touch with me.</p>
                </div>
                <Link className="project-link" to="/projects">
                    <div className="button">Projects</div>
                </Link>
                <Link className="contact-link" to="/contact">
                    <div className="button">Contact</div>
                </Link>
                
            </StyledWrapper>
            </>
        )
}

export default HomeContent;
