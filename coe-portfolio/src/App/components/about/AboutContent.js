import React from 'react';
import BabyPhoto from '../Images/BabyPhoto.jpg';
import languagePhotos from '../../objects/languageObject';
import LanguageTile from './LanguageTile';
import { AboutContainer } from './aboutStyles';


const AboutContent = () => {
    const renderedList = languagePhotos.map((photo) => {
        return <LanguageTile 
                    key={photo.id}
                    photo={photo}/>
    })
    
    return (
        <AboutContainer>  
            <div className='about-para'>
                <h1>My Journey</h1>
                <p>
                    My name is Caleb and I have been a carpenter professionally for 8 years. Around August 2019, I began
                    learning the basics of web development through 
                    <a className="fcc-anchor" 
                    href="https://www.freecodecamp.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"> Free Code Camp</a>. 
                    FCC has been useful for learning a lot of the basics of web development, but it was just the beginning.
                    Before long, I was spending all of my free time learning how to develop. This led me to an intense in-person
                    learning program called a Coding Bootcamp hosted by
                    <a className="cult-code-anchor"
                    href="https://cultivatecoders.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"> Cultivating Coders </a> 
                    in Albuquerque, NM. Attending the bootcamp strengthened my skills in HTML, CSS, Javascript and web design. 
                    These skills have proven invaluable on my learning adventure.
                </p>
                <h1>Skill Set</h1>
                <p>
                    The technology I primarily use to build web pages and applications is Javascript. React helps me build 
                    beautiful, responsive front-ends while Node takes care of the back-end through the framework Express. Here 
                    are all of the languages and frameworks I currently use:
                </p>
                <div className="language-photos">
                    {renderedList}
                </div>
            </div>
                
            <div className='about-photo'>
                <img alt='' src={BabyPhoto}></img>
                <p>Caleb Coe</p>                
            </div>
        </AboutContainer>
    )
    
}

export default AboutContent;
