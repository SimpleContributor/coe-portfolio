import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StyledWrapper } from './homeStyle';

class HomeContent extends Component {
    constructor() {
        super()
        this.state = {
            animate: true
        }
    }
    
    render() {
        return (
            <>
            <StyledWrapper>
                <div className="intro-container">
                    <div
                        className={
                            this.state.animate ? "greeting fade-in" : "greeting"
                        }
                    >
                        <h1 className="intro-pc">Welcome to the website!</h1>
                        <h1 className="intro-mobile">Welcome!</h1>
                    </div>
                    <div
                        className={
                            this.state.animate ? "paragraph fade-in" : "paragraph"
                        }
                    >
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
                <div
                    className={
                        this.state.animate ? "link-container fade-in" : "link-container"
                    }
                >
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

    componentDidMount() {
        if(window.sessionStorage.getItem("firstLoadDone") === null) {
            this.setState({
                animate: true
            })

            window.sessionStorage.setItem("firstLoadDone", 1)
        } else {
            this.setState({
                animate: false
            })
        }
    }
        
}

export default HomeContent;
