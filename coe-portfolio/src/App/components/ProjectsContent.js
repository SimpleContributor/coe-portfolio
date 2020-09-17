import React from 'react';
import projectPhotos from '../objects/photosObject';
import PhotoTile from './PhotoTile';


const ProjectsContent = () => {
    const renderedList = projectPhotos.map((photo) => {
        return <PhotoTile 
                    key={photo.id}
                    photo={photo}/>
    })

    return(
        <div>
            {renderedList}
        </div>
    )
}

export default ProjectsContent;
