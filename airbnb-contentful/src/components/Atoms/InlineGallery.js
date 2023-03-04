import React from 'react'
import styled from 'styled-components'

export const InlineGallery = ({ images }) => {
    // console.log(images);
    
    return (
        <Gallery>
            {images.map((el) => {
                return (
                    <img src={el.url} />
                )
            })}
        </Gallery>
    )
}

export const Gallery = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    img {
        object-fit: cover;
        @-moz-document url-prefix() {
            height: 100%;
        }
    }
`