import React from 'react';

const PhotoTile = ({ photo }) => {
    return (
        <div>
            <a href={photo.href}
                target="_blank"
                rel="noopener noreferrer">
                <img alt={photo.alt} 
                    src={photo.src}></img>
                <p>{photo.name}</p>
            </a>
        </div>
    )
}

export default PhotoTile;
