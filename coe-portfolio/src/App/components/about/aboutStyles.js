import styled from 'styled-components';

//// ABOUT.JS ////
export const StyledAbout = styled.div`
    background-color: #ccc;
    min-height: 100vh;
    text-align: center;
`;


//// ABOUTCONTENT.JS ////
export const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding: 200px 0 120px 0;

    h1{
        font-size: 3rem;
        margin-top: 0;
    }

    .about-para{
        font-size: 1.6rem;
        margin: auto;
        width: 80%
    }

    .fcc-anchor,
    .cult-code-anchor{
        color: #444;
        text-decoration: none;
    }

    .about-photo{
        display: grid;
        font-size: 1.4rem;
        height: 300px;
        justify-content: start;
    }

    img{
        border-radius: 10px;
        height: 300px;
    }

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        grid-template-rows: 350px 450px;

        .about-photo{
            justify-content: center;
        }
    }

    @media (max-width: 768px) {
        grid-template-rows: 420px 450px;
    }

    @media (max-width: 620px) {
        grid-template-rows: 500px 450px;
    }

    @media (max-width: 500px) {
        grid-template-rows: 550px 450px;
    }

    @media (max-width: 420px) {
        grid-template-rows: 620px 450px;
    }
`;
