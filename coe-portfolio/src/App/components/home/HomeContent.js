import React from 'react';
import { Link } from 'react-router-dom';
import { StyledWrapper } from './homeStyle';

function HomeContent() {
    // const [ishovered, setIshovered] = useState(false);

        return (
            <>
            <StyledWrapper>
                <div className="intro-container">
                    <div className="greeting">
                        <h1 className="intro-pc">Welcome to the website!</h1>
                        <h1 className="intro-mobile">Welcome!</h1>
                    </div>
                    <div className="paragraph">
                        <p className="intro-container-para intro-pc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus vestibulum enim 
                            laoreet scelerisque. Aenean lorem ligula, molestie nec nulla non, tempor imperdiet elit. 
                            Sed in suscipit augue. Aliquam vel malesuada nibh. Aliquam iaculis quam ante, vel 
                            tempor ligula rutrum id. Duis mattis pharetra suscipit. Integer molestie lorem ac dolor 
                            convallis iaculis. Mauris nibh urna, blandit sit amet varius quis, tempor non massa.
                        </p>
                        <p className="intro-container-para intro-mobile">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus vestibulum enim 
                            laoreet scelerisque. Aenean lorem ligula, molestie nec nulla non, tempor imperdiet elit. 
                            Sed in suscipit augue. Aliquam vel malesuada nibh.
                        </p>
                    </div>
                </div>
                <div className="link-container">
                    <Link className="project-link" to="/photos">
                        <div className="button">Photos</div>
                    </Link>
                    <Link className="project-link" to="/about">
                        <div className="button">About</div>
                    </Link>
                    <Link className="project-link" to="/contact">
                        <div className="button">Contact</div>
                    </Link>
                </div>
            </StyledWrapper>
            </>
        )
}

export default HomeContent;
