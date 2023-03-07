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
                            <span>
                                <p>{el.description && el.description.description}</p>
                                <h5>{el.title}</h5>
                            </span>
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
    gap: 20px;
    height: auto;

    margin: 10px auto;
    @media (max-width: 615px) {
        gap: 10px;
    }
`
export const GuideCards = styled.div`
box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
    max-width: calc(300px - 10px);
    min-height: 90px;
    padding: 10px 0;

    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;

    border-radius: 30px;
    img {
        max-height: 55px;
        justify-self: center;
    }
    p {
        font-size: 12px;
        margin: 0;
        color: #ff5a5f;
        font-weight: 500;
    }
    h5 {
        font-weight: bold;
        text-align: left !important;
        margin: 0;
        padding: 0 10px 0 0;
        word-break: break-word;
    }
    @media (max-width: 615px) {
        gap: 5px;
        grid-template-columns: 1fr;
        justify-items: center;
        text-align: center;
        h5 {
            font-size: 16px;
            text-align: center !important;
            padding: 0 15px;
        }
        img {
            
        }
    }
`