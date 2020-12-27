import styled from 'styled-components';

//// PHOTOS.JS ////
export const ProjectsWrapper = styled.div`
    background-color: #ccc;
    display: grid;
    min-height: 1600px;
    overflow-x: hidden;
    
    @media (max-width: 1200px){
        min-height: 2000px;
    }

    @media (max-width: 768px){
        min-height: 3700px;
    }
`


//// PROJECTSCONTENT.JS ////
export const ProjectContainer = styled.div`
    align-items: center;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(3, 400px);
    grid-template-rows: repeat(3, 400px);
    justify-content: center;
    padding: 80px 0;

    @media(max-width: 1200px){
         grid-template-columns: repeat(2, 400px);
         grid-template-rows: repeat(4, 400px);
    }
        
    @media(max-width: 768px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(8, 400px);
    }


`


//// PHOTOTILE.JS ////
export const StyledTile = styled.div`
    border-radius: 10px;
    padding: 10px;

    a{
        color: #000;
        display: grid;
        justify-items: center;
        text-decoration: none;
    }

    img{
        border: 2px solid #000;
        border-radius: 10px;
        cursor: pointer;
        height: 300px;
    }

    p{
        font-size: 1.5rem;
        text-align: center;
    }

    @media(max-width: 500px) {
        img{
            height: 250px;
        }
    }
`
