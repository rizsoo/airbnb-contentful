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
                        <Coverbox bg={el.featuredImage && el.featuredImage.url}>
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
    border-radius: 5px;

    cursor: pointer;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: auto;
    margin-right: auto;

    background: url(${props => props.bg});
    background-size: cover;
    background-position: center;

    h4 {
        font-weight: bold;
        text-align: center;
      
        background-color: rgba(255, 255, 255, 0.849);
        padding: 12px;
        border: none;
        border-radius: 5px;
      
        transition: all ease-in-out 0.2s;
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