import React, { useState } from 'react';
import styled from 'styled-components';
import NavLinks from './NavLinks';

const StyledBurger = styled.div`
    display: none;
    height: 60px;
    position: fixed;
    right: 30px;
    top: 30px;
    width: 60px;
    z-index: 30;
    

    @media (max-width: 768px) {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
    }

    div{
        background-color: ${({ open }) => open ? '#000' : '#000'};
        border-radius: 10px;
        height: 8px;
        transform-origin: 8px;
        transition: all 0.3s linear;
        width: 60px;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg) translateX(25%)' : 'rotate(0)'};
        }

        
        &:nth-child(2) {
            opacity: ${({ open }) => open ? 0 : 1};
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg) translateX(25%)' : 'rotate(0)'};
        }
    }
`;


const BurgerLinks = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <NavLinks open={open}/>
        </>
    )
}

export default BurgerLinks;
