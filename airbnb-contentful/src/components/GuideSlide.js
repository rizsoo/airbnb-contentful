import React from 'react'
import { Link } from 'gatsby'
import { useState } from "react";
import styled from 'styled-components';
import { ArrowBackCircleOutline, ArrowForwardCircleOutline } from 'react-ionicons'

export const GuideSlide = ({ ...props }) => {
    console.log(props.props);
    let items = props.props
    const [current, setCurrent] = useState(0);
    const length = items.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    return (
        <div>
            <div>
                {items.map((slide, index) => {
                    return (
                        <SliderContainer current={current} key={index}>
                            {index === current && (<img src={slide.image ? slide.image.url : slide.featured_image.url} alt="asd" />)}
                            {index === current && (<Steps>
                                <h5>{slide.title}</h5>
                                <p>{slide.description.description}</p>
                            </Steps>)}
                        </SliderContainer>
                    )
                })}
                {current > 0 ? <PrevArrow onClick={prevSlide} ><ArrowBackCircleOutline
                    color={'#f35356'}
                    height="100%"
                    width="100%" /></PrevArrow> : null}
                {current < items.length - 1 ? <NextArrow onClick={nextSlide} ><ArrowForwardCircleOutline color={'#f35356'}
                    height="100%"
                    width="100%" /></NextArrow> : null}
            </div>
        </div>
    )
}

export const SliderContainer = styled.div`
    width: 100vw;
    max-width: 600px;
    margin: 0 auto;
    height: auto;
    img {
        width: 100vw;
        max-width: 600px;
        object-fit: cover;
        object-position: center center;
    }
    h5 {
        font-size: 25px;
        margin: 25px 0 5px 0;
    }
    p {
        padding-bottom: 15px;
        color: grey;
        margin: 0;
    }
`
export const Steps = styled.div`
    position: absolute;
    bottom: 0;

    background-color: white;

    padding: 20px 10px;
    margin: 0;

    height: 100px;
    width: 100vw;
    max-width: 600px;
`

export const NextArrow = styled.div`
    width: 70px;
    height: 70px;
    background-color: white;
    border-radius: 50%;
  
    cursor: pointer;
  
    position: absolute;
    bottom: 100px;
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    right: 10px;
    span {
        margin-top: 5px;
    }
`
export const PrevArrow = styled.div`
    width: 70px;
    height: 70px;
    background-color: white;
    border-radius: 50%;
  

    cursor: pointer;

    position: absolute;
    bottom: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    left: 10px;
    span {
        margin-top: 5px;
    }
`