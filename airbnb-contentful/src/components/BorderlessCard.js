import React from 'react'
import styled from 'styled-components'

const BorderlessCard = (props) => {
  let data = props.props
  console.log(data);
  return (
    <>
      {data.map(el => {
        return (
          <Card>
            <div>
              <h3><b>{el.title}</b></h3>
              <p>{el.description.description}</p>
            </div>
            <img src={el.image && el.image.url} alt='' />
          </Card>
        )
      })}
    </>
  )
}

export const Card = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  margin: 20px auto;
  img {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 600px) {
      flex-direction: row-reverse;
      justify-content: left;
      gap: 10px;
      img {
        width: 120px;
        height: 120px;
      }
   }
`

export default BorderlessCard