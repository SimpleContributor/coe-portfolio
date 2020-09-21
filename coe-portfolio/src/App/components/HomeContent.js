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
    
    padding-bottom: 100px;
    width: 100%;

    @media (max-width: 500px){
        grid-template-columns: 1fr;
        grid-template-rows: auto 120px 120px;
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
        margin: 30px 0 30px 30px;
        width: 75%;

        @media (max-width: 768px){
            width: 220px;
        }

        @media (max-width: 500px){
            font-size: 2.4rem;
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
        margin: 0 0 30px 30px;
        padding: 15px 0;
        width: 90%;

        @media (max-width: 500px){
            font-size: 1.1rem;
            width: 310px;
        }
    }

    .project-link,
    .contact-link{
        background-color: #eb4511;
        border: 2px solid black;
        border-radius: 10px;
        color: #000;
        grid-column-start: 1;
        grid-column-end: 2;
        height: 130px;
        margin-left: 30px;
        text-decoration: none;
        width: 455px;

        @media (max-width: 500px){
            height: 100px;
            justify-items: center;
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
                    
                    <p>My name is Caleb. I have been a carpenter for 8 years, but I have always been drawn to development. 
                    Starting in August 2019, I began learning programming. </p>
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
