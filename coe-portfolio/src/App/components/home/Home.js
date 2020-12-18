import React, { Component } from 'react';
import HomeContent from './HomeContent';

import { StyledHome } from './homeStyle';


class Home extends Component {
    render() {
        return(
            <StyledHome>
                <HomeContent />
            </StyledHome>
        )
    }
}

export default Home;
