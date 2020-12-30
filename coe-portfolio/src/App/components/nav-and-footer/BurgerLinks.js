import React, { useState } from 'react';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import { BurgerStyles } from './style';

const StyledBurger = styled.div`${BurgerStyles}`;

const BurgerLinks = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <NavLinks open={open} setOpen={setOpen} />
        </>
    )
}

export default BurgerLinks;
