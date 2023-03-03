import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export const MozaikCards = ({ props }) => {
    return (
        <GuideComponent>
            {props.map((el) => {
                return (
                    <Link to={`/${el.node_locale}/${el.slug}`}>
                        <GuideCards>
                            <img src={el.featuredImage.url} alt='image_machines' />
                            <h5>{el.title}</h5>
                        </GuideCards>
                    </Link>
                )
            })}
        </GuideComponent>
    )
}
export const GuideComponent = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    height: auto;

    margin: 10px auto;
    a {
        max-width: calc(300px - 10px);
        height: 180px; 
    }
`
export const GuideCards = styled.div`
    box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 10px;

    max-width: calc(300px - 10px);
    height: 180px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    border-radius: 10px;
    img {
        height: 55px;
    }
    h5 {
        font-weight: bold;
        text-align: center;
        padding: 0 15px;
      }
      @media (max-width: 415px) {
        h5 {
            font-size: 18px;
        }
      }
`