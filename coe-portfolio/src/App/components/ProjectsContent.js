import React from 'react';
import styled from 'styled-components';
import projectPhotos from '../objects/photosObject';
import PhotoTile from './PhotoTile';

const ProjectContainer = styled.div`
    align-items: center;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(3, 350px);
    grid-template-rows: repeat(3, 350px);
    justify-items: center;
    justify-self: center;
    margin-top: 180px;
    min-height: 130vh;
    padding-bottom: 100px;

    @media(max-width: 1200px){
         grid-template-columns: repeat(2, 350px);
    }
        
    @media(max-width: 768px){
        grid-template-columns: 1fr;
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
