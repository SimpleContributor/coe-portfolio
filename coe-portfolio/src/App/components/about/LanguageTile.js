import React from 'react';
import { StyledLangTile } from './aboutStyles';

const PhotoTile = ({ photo }) => {
    return (
        <StyledLangTile>
            <img alt={photo.alt} 
                src={photo.src}>    
            </img>  
        </StyledLangTile>
    )
}

export default PhotoTile;
