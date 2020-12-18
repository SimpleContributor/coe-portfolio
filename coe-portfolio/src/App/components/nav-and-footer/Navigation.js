import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/React-icon.svg';
import BurgerLinks from './BurgerLinks';
import { StyledNav } from './style';

//navbar
class Navigation extends Component {
    render() {
        return (
            <StyledNav>
                <Link to="/">
                    <img alt="Logo Link to the Home Page" className="logo-img" src={Logo}></img>
                </Link>
                <BurgerLinks />
            </StyledNav>
        )
    }
}

export default Navigation;
