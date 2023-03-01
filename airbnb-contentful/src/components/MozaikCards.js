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
    max-width: 600px;
    display: flex;
    flex-wrap: wrap;
    height: auto;

    margin: 10px auto;
`
export const GuideCards = styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    width: calc(50vw - 20px);
    max-width: calc(300px - 20px);
    height: 180px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    border-radius: 20px;
    margin: 10px;
    img {
        height: 55px;
    }
    h5 {
        font-weight: bold;
        text-align: center;
        padding: 0 15px;
      }
`