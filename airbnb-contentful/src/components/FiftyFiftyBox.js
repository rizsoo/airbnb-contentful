import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';
import { LogInOutline } from 'react-ionicons'

const FiftyFiftyBox = ({ data }) => {
    // console.log(data);
    return (
        <>
            {data.map(el => {
                return (
                    <>
                        {el.link ?
                            <Link to={el.link} target={el.link.includes("http") && "_blank"} rel="noreferrer">
                                <Card>
                                    <img src={el.image && el.image.url} alt='' />
                                    <TextBox>
                                        <TextContent>
                                            <h3><b>{el.title}</b></h3>
                                            <p>{el.description && el.description.description}</p>
                                        </TextContent>
                                        {el.tags && <Hashtags>{el.tags.map(tag => <b>#{tag}</b>)}</Hashtags>}
                                        {el.link && <LogInOutline
                                            color={'#979797'}
                                            title={'asd'}
                                            height="25px"
                                            width="25px"
                                        />}
                                    </TextBox>
                                </Card>
                            </Link>
                            :
                            <Card>
                                <img src={el.image && el.image.url} alt='' />
                                <TextBox>
                                    <TextContent>
                                        <h3><b>{el.title}</b></h3>
                                        <p>{el.description && el.description.description}</p>
                                    </TextContent>
                                    {el.tags && <Hashtags>{el.tags.map(tag => <b>#{tag}</b>)}</Hashtags>}
                                </TextBox>
                            </Card>
                        }
                    </>
                )
            })}
        </>
    )
}

export const Card = styled.div`
    max-width: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    height: auto;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    margin: 20px auto;
    img {
        min-height: 300px;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 1 / 1;
    }
    @media (max-width: 610px) {
        img {
            min-height: unset;
            object-fit: cover;
            aspect-ratio: 1 / 1;
        }
    }
`

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    span {
        position: absolute;
        right: 15px;
        top: 15px;
        @media (max-width: 610px) {
            display: none;
        }
    }
`
export const TextContent = styled.div`
    padding-right: 15px;
    h3 {
        margin: 15px 0;
        font-size: 2rem;
    }
    p {
        margin: 0;
        padding-bottom: 30px;
    }
    @media (max-width: 610px) {
        h3 {
            font-size: 1.3rem;
        }
        p {
            font-size: 15px;
        }
    }
`

export const Hashtags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin: 15px 0;
    b {
        padding: 5px;
        background-color: #f9f9f9;
        border-radius: 5px;
        font-weight: 300;
        font-size: 13px;
        color: #979797;
    }
`

export default FiftyFiftyBox