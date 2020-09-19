import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Ul = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-column-gap: 50px;
    list-style: none;

    .nav-links{
        align-items: center;
        color: #000;
        display: grid;
        font-size: 1.5rem;
        height: 50px;
        text-decoration: none;
    }

    .nav-links:hover{
        font-size: 1.7rem;
    }

    li {
        z-index: 20;
    }

    @media (max-width: 768px) {
        align-items: center;
        background-color: #62a87c;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 120px);
        height: 99vh;
        justify-items: center;
        padding-top: 3.5rem;
        position: fixed;
        right: 0;
        top: 0;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s ease-in-out;
        width: 99vw;
        z-index: 20;

        li {
            color: #000;
            font-size: 3rem;
            z-index: 20;
        }
    }
`;

//nav-list and nav-links
const NavLinks = ({ open }) => {
    return (
        <Ul className="nav-list" open={open}>
            <Link to="/" className="nav-links">
                <li>Home</li>
            </Link>
            <Link to="/projects" className="nav-links">
                <li>Projects</li>
            </Link>
            <Link to="/contact" className="nav-links">
                <li>Contact</li>
            </Link>
        </Ul>
    )
}

export default NavLinks;