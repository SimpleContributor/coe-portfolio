import styled from 'styled-components';

//// HOME.JS ////
export const StyledHome = styled.div`
    background-color: #ccc;
    margin: 0;
    width: 100vw;
`;




//// HOMECONTENT.JS ////
export const StyledWrapper = styled.div`
    justify-items: center;
    display: grid;
    line-height: 1.6;
    padding: 192px 0 320px 0;
    width: 100%;


    .intro-container{
        display: grid;
        justify-items: center;
    }


    h1{
        align-self: center;
        font-size: 3rem;
        margin-top: 0;
        text-align: center;
        width: 100%;
    }

    .intro-pc{
        display: block;
        margin-bottom: 0;
    }

    .intro-mobile{
        display: none;
        margin-bottom: 0;
    }

    .paragraph{
        margin-bottom: 32px;
        width: 60%;
    }

    .intro-container-para{
        font-size: 1.6rem;
        padding-bottom: 30px;
        text-align: center;
    }

    .link-container{
        display: grid;
        grid-template-columns: repeat(3, 250px);
        grid-column-gap: 60px;
        justify-content: center;
        width: 100%;
    }

    .project-link{
        background-color: #888;
        border: 2px solid black;
        border-radius: 10px;
        color: #000;
        height: 125px;
        text-decoration: none;
        width: 250px;
    }

    .project-link:hover{
        background-color: #666666;
    }

    div.button{
        align-items: center;
        display: grid;
        font-size: 2rem;
        height: 100%;
        justify-items: center;
        width: 100%;
    }

    .fade-in{
        animation: fade 1.2s ease-in;
    }

    @keyframes fade{
        0%{
            opacity: 0;
        }
    }

    @media (max-width: 1000px) {
        .link-container{
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, 140px);
            grid-row-gap: 60px;
            justify-items: center;
        }

        .project-link{
            height: 140px;
            width: 500px;
        }
    }

    @media (max-width: 768px) {
        padding-bottom: 220px;

        .intro-pc{
            display: none;
        }

        .intro-mobile{
            display: block;
        }

        .paragraph{
            width: 70%;
        }

        .intro-container-para{
            font-size: 1.4rem;
        }

        .link-container{
            grid-row-gap: 0;
        }

        .project-link{
            height: 100px;
            width: 390px;
        }
    }

    @media (max-width: 500px) {
        grid-template-rows: auto 120px 120px;
        line-height: 1.8;
        padding-bottom: 340px;

        h1{
            font-size: 2.4rem;
        }

        .paragraph{
            width: 100%;
        }

        .intro-container-para{
            font-size: 1.1rem;
            width: 310px;
        }

        .project-link{
            height: 100px;
            width: 250px;
        }
    }
`;
