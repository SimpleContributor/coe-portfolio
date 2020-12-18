import React, { Component } from 'react';
import BabyPhoto from '../Images/BabyPhoto.jpg';
import { AboutContainer } from './aboutStyles';


class AboutContent extends Component {
    render() {
        return (
            <AboutContainer>
                <div>
                <h1>My Mission!</h1>
                    <div className='about-para'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus vestibulum enim 
                            laoreet scelerisque. Aenean lorem ligula, molestie nec nulla non, tempor imperdiet elit. 
                            Sed in suscipit augue. Aliquam vel malesuada nibh. Aliquam iaculis quam ante, vel 
                            tempor ligula rutrum id. Duis mattis pharetra suscipit. Integer molestie lorem ac dolor 
                            convallis iaculis. Mauris nibh urna, blandit sit amet varius quis, tempor non massa.
                        </p>
                    </div>
                </div>
                <div className='about-photo'>
                    <img alt='' src={BabyPhoto}></img>
                    <p>Caleb Coe</p>
                </div>
            </AboutContainer>
        )
    }
}

export default AboutContent;
