import styled, { css } from 'styled-components';


//// NAVIGATION.JS ////
export const StyledNav = styled.div`
    align-items: center;
    background-color: #888;
    border-bottom: 2px solid black;
    display: grid;
    grid-template-columns: 120px auto;
    height: 120px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    justify-items: center;
    margin-left: auto;


    .logo-img{
        height: 100px;
    }
`;

//// BURGERLINKS.JS ////
export const BurgerStyles = css`
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


//// NAVLINKS.JS ////
export const UlStyles = css`
    display: grid;
    grid-template-columns: repeat(4, 120px);
    grid-column-gap: 50px;
    justify-self: end;
    list-style: none;
    margin-right: 24px;

    .nav-links{
        align-items: center;
        color: #000;
        display: grid;
        font-size: 1.6rem;
        height: 50px;
        text-decoration: none;
    }

    .nav-links:hover{
        font-size: 1.9rem;
    }

    li {
        z-index: 20;
    }

    @media (max-width: 768px) {
        align-items: center;
        background-color: #888;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 110px);
        min-height: 500px;
        justify-items: center;
        margin-right: 0;
        padding-top: 36px;
        position: fixed;
        right: 0;
        top: 0;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s ease-in-out;
        width: 99vw;
        z-index: 20;

        li {
            color: #000;
            font-size: 2rem;
            font-weight: 500;
            z-index: 20;
        }
    }
`;


//// FOOTER.JS ////
export const StyledFooter = styled.div`
    background-color: #888;
    border-top: 2px solid black;
    bottom: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 120px;
    left: 0;
    padding: 16px 60px;
    position: absolute;
    width: 100vw;

    .created-by{
        align-items: center;
        display: grid;
    }

    p{
        font-size: 1.6rem;
        margin: 0;
    }

    .social-links{
        align-items: center;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        margin-right: 100px;
    }

    .social-links img{
        width: 80px;
    }

    @media (max-width: 1200px){
        grid-template-columns: 1fr 2fr;
    }

    @media (max-width: 768px){
        grid-template-columns: 1fr 3fr;

        

        p{
            align-self: center;
            font-size: 1.2rem;
        }

        .social-links img{
            width: 60px;
        }
    }

    @media (max-width: 500px){
        grid-template-columns: 1fr;
        padding: 16px 0;

        .social-links{
            margin-right: 0;
            padding-right: 10px;
        }

        .created-by p{
            text-align: center;
        }
    }
`;
