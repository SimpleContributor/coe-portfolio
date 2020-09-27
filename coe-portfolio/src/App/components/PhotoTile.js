import React from 'react';
import styled from 'styled-components';

const StyledTile = styled.div`
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

        @media(max-width: 500px){
            height: 250px;
            
        }
    }

    p{
        font-size: 1.5rem;
        text-align: center;
    }

`

const PhotoTile = ({ photo }) => {
    return (
        <StyledTile>
            <a href={photo.href}
                target="_blank"
                rel="noopener noreferrer">
                <img alt={photo.alt} 
                    src={photo.src}></img>
                <p>{photo.name}</p>
            </a>
        </StyledTile>
    )
}

export default PhotoTile;
