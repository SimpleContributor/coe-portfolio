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
    padding: 80px 0 120px 0;

    h1 {
        font-size: 3rem;
        margin-top: 0;
    }

    .about-para {
        font-size: 1.6rem;
        margin: auto;
        width: 80%
    }

    .fcc-anchor,
    .cult-code-anchor {
        color: #444;
        text-decoration: none;
    }

    .language-photos {
        background-color: #888;
        border-radius: 8px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 80px;
        padding-top: 36px;
        padding-bottom: 24px;
        margin: 80px 0;
    }

    .about-photo {
        display: grid;
        font-size: 1.8rem;
        height: 300px;
        justify-content: start;
        margin-left: 24px;
        margin-top: 80px;
    }

    .about-photo p {
        margin-top: 12px;
    }

    img {
        border-radius: 10px;
        height: 300px;
    }

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto 450px;

        .about-photo {
            justify-content: center;
            margin: 0;
        }
    }
`;

//// LANGUAGETILE.JS ////
export const StyledLangTile = styled.div`
    img {
        height: 150px;  
    }

    p {
        font-size: 1.5rem;
        text-align: center;
    }

    @media (max-width: 1000px) {
        img {
            height: 100px;
        }
    }

    @media (max-width: 500px) {
        img {
            height: 80px;
        }
    }
`
