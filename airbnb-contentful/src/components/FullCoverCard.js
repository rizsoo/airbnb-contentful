import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';

export const FullCoverCard = ({ data }) => {
    // console.log(data);
    return (
        <>
            {data.map(el => {
                return (
                    <Link to={`/${el.node_locale}/${el.slug}`}>
                        <Coverbox>
                            <img src={el.featuredImage.url} alt="" />
                            <h4>{el.title}</h4>
                        </Coverbox>
                    </Link>

                )
            })}
        </>
    )
}

export const Coverbox = styled.div`
    max-width: 600px;
    height: 250px;

    margin: 15px;

    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    cursor: pointer;
    overflow: hidden;

    position: relative;

    margin-left: auto;
    margin-right: auto;
    h4 {
        font-weight: bold;
        text-align: center;
      
        background-color: rgba(255, 255, 255, 0.849);
        padding: 12px;
        border: none;
        border-radius: 5px;
      
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      
        transition: all ease-in-out 0.2s;
    }
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
        transition: all ease-in-out 0.2s;
      
        position: relative;
        z-index: -1;
    }
    &:hover > img {
        filter: blur(2px);
    }
    &:hover > h4 {
        opacity: 1;
    }
    @media (min-width: 650px) {
        h4 {
          opacity: 0;
        }
      }
`