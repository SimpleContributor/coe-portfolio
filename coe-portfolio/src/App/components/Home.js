import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import HomeContent from './HomeContent';

const StyledHome = styled.div`
    background-color: #89be9c;
    min-height: 110vh;
    margin: 0;
    padding: 0;
    width: 100vw;
`

class Home extends Component {
    render() {
        return(
            <StyledHome>
                <Navigation />
                <HomeContent />
            </StyledHome>
        )
    }
}

export default Home;
