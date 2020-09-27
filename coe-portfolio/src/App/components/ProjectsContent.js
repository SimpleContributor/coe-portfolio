import React from 'react';
import styled from 'styled-components';
import projectPhotos from '../objects/photosObject';
import PhotoTile from './PhotoTile';

const ProjectContainer = styled.div`
    align-items: center;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(3, 400px);
    grid-template-rows: repeat(3, 400px);
    justify-content: space-around;
    margin-top: 180px;
    min-width: 100vw;
    padding-bottom: 180px;

    @media(max-width: 1200px){
         grid-template-columns: repeat(2, 400px);
         grid-template-rows: repeat(4, 400px);
    }
        
    @media(max-width: 768px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(7, 400px);
    }


`

const ProjectsContent = () => {
    const renderedList = projectPhotos.map((photo) => {
        return <PhotoTile 
                    key={photo.id}
                    photo={photo}/>
    })

    return(
        <ProjectContainer>
            {renderedList}
        </ProjectContainer>
    )
}

export default ProjectsContent;
