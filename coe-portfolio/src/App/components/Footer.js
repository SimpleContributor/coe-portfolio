import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
    background-color: lightblue;
    border-top: 2px solid black;
    bottom: 0;
    height: 200px;
    left: 0;
    padding: 16px 60px;
    position: absolute;
    width: 100vw;
`

const Footer = () => {

    return (
        <>
            <StyledFooter>
                <div className="created-by">
                    <p>Created by: Caleb Coe</p>
                    <img></img>
                </div>

                <div className="social-links">

                </div>
            </StyledFooter>
        </>
    ) 
}

export default Footer;
