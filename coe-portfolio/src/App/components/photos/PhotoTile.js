import React from 'react';
import { StyledTile } from './photosStyle';

const PhotoTile = ({ photo }) => {
    return (
        <StyledTile>
            <a href={photo.href}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img alt={photo.alt} 
                    src={photo.src}>    
                </img>
                <p>{photo.name}</p>
            </a>
        </StyledTile>
    )
}

export default PhotoTile;
