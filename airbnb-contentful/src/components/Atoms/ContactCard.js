import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import { OpenOutline } from 'react-ionicons'

export const ContactCard = ({ el, lang }) => {
    const [isShown, setIsShown] = useState(false)
    // console.log(el);
    return (
        <CardContent>
            <CardContentLeft>
                <img src={el.image.url} alt="" />
                <CardTextarea>
                    <h4>{el.title}</h4>
                    {isShown && el.link ?
                        <a href={el.link} target="_blank" rel="noreferrer">
                            <p>{el.description.description} <OpenOutline
                                color={'#1996c3'}
                                title={"asd"}
                                height="17px"
                                width="17px"
                            /></p>
                        </a>
                        : isShown ? <p>{el.description.description}</p>
                            : ""}
                </CardTextarea>
            </CardContentLeft>
            {isShown ? "" : <button onClick={() => setIsShown(true)}>{lang.node_locale === "en" ? "Show" : "Mutasd"}</button>}
        </CardContent>
    )
}

export const CardContent = styled.div`
    max-width: 600px;
    height: auto;
    padding: 20px 10px;

    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 15px;

    margin-right: auto;
    margin-left: auto;
    margin: 13px auto;

    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;
    img {
        height: 75px;
        width: auto;
        margin-right: 5px;
    }
    button {
        border-radius: 10px;
        font-weight: bold;
        background-color: rgb(241, 241, 241);
        color: rgb(0, 157, 255);
        border: unset;
        padding: 5px 14px;
        outline: unset;
        font-size: 23px;
        cursor: pointer !important;
      }
    @media (max-width: 450px) {
        img {
          height: 50px;
        }
    }
`

export const CardContentLeft = styled.div`
    display: flex;
    align-items: center;
`

export const CardTextarea = styled.div`
    display: flex;
    flex-direction: column;
    h4 {
        font-size: 26px;
        font-weight: bold;
        margin: 0;
        border: none;
    }
    p {
        font-weight: bold;
        margin: 0;
        color: #1996c3;
    }
    @media (max-width: 450px) {
        h4 {
          font-size: 23px;
        }
    }
`