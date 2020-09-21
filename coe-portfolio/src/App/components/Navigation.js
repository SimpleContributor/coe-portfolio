import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Images/028_c-logo.png';
import BurgerLinks from './BurgerLinks';
import styled from 'styled-components';

const StyledNav = styled.div`
    align-items: center;
    background-color: #6998B5;
    display: grid;
    grid-template-columns: 120px auto;
    height: 120px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;

    &:nth-child(1){
        justify-items: end;
    }

    .img-link{
        align-items: center;
        display: grid;
        height: 120px;
        justify-items: center;
    }

    .logo-img{
        height: 100px;
    }
`;

//navbar
class Navigation extends Component {
    render() {
        return (
            <StyledNav>
                <Link to="/" className="img-link">
                    <img alt="Letter C logo links to home" className="logo-img" src={Logo}></img>
                </Link>
                <BurgerLinks />
            </StyledNav>
        )
    }
}

export default Navigation;
