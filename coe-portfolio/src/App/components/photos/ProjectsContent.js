import React from 'react';
import projectPhotos from '../../objects/photosObject';
import PhotoTile from './PhotoTile';
import { ProjectContainer } from './photosStyle';

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
