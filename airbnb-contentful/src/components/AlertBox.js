import React from 'react'
import styled from 'styled-components'

export const AlertBox = (props) => {
    let data = props.props
    console.log(data);
    return (
        <>
            {data.map(el => {
                return (
                    <AlertCard>
                        <div>
                            <h3><b>{el.title}</b></h3>
                            <p>{el.description.description}</p>
                        </div>
                        <img src={el.image && el.image.url} alt='' />
                    </AlertCard>
                )
            })}
        </>
    )
}

export const AlertCard = styled.div`
    background-color: #ffcfdb;
    max-width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 25px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    margin: 20px auto;
    img {
        width: 100px;
        height: 100px;
      }
    p {
      line-height: 21px;
      margin: 0;
    }
    h3 {
        margin: 0 0 10px 0;
    }
    @media (max-width: 600px) {
        img {
          display: none;
        }
      }
`