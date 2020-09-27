import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import HomeContent from './HomeContent';
import Footer from './Footer';

const StyledHome = styled.div`
    background-color: #8eb1c7;
    min-height: 1300px;
    margin: 0;
    padding: 0;
    padding-top: 120px;
    width: 100vw;

    @media (max-width: 500px){
        min-height: 1100px;
    }
`

class Home extends Component {
    render() {
        return(
            <StyledHome>
                <Navigation />
                <HomeContent />
                <Footer />
            </StyledHome>
        )
    }
}

export default Home;
