import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import HomeContent from './HomeContent';

const StyledHome = styled.div`
    background-color: #8eb1c7;
    min-height: 110vh;
    margin: 0;
    padding: 0;
    padding-top: 120px;
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
