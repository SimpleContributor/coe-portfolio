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
                        <h1 className="intro-pc">Welcome to my website!</h1>
                        <h1 className="intro-mobile">Welcome!</h1>
                    </div>
                    <div
                        className={
                            this.state.animate ? "paragraph fade-in" : "paragraph"
                        }
                    >
                        <p className="intro-container-para">
                            Check out some of my work by clicking Projects. If you are interested in my story and what I can do, click About.
                            Get in touch with me directly by clicking Contact and filling out a small form. Go on, click a button!
                        </p>
                    </div>
                </div>
                <div
                    className={
                        this.state.animate ? "link-container fade-in" : "link-container"
                    }
                >
                    <Link className="project-link" to="/projects">
                        <div className="button">Projects</div>
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
