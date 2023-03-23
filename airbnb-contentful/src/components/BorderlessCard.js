import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { LogInOutline } from 'react-ionicons'

const BorderlessCard = (props) => {
  let data = props.props
  // console.log(data);
  return (
    <>
      {data.map(el => {
        return (
          <>
            {el.link ?
              <Link to={el.link} target={el.link.includes("http") && "_blank"} rel="noreferrer">
                <Card>
                  <TextBox>
                    <h3><b>{el.title}</b></h3>
                    <p>{el.description && el.description.description}</p>
                    <LogInOutline
                      color={'#979797'}
                      title={'asd'}
                      height="25px"
                      width="25px"
                    />
                  </TextBox>
                  <img src={el.image && el.image.url} alt='' />
                </Card>
              </Link>
              :
              <Card>
                <div>
                  <h3><b>{el.title}</b></h3>
                  <p>{el.description && el.description.description}</p>
                </div>
                <img src={el.image && el.image.url} alt='' />
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
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  margin: 20px auto;
  img {
    max-width: 200px;
    height: 150px;
    object-fit: cover;
  }
  @media (max-width: 600px) {
      flex-direction: row-reverse;
      justify-content: left;
      gap: 10px;
      img {
        width: 120px;
        height: 120px;
      }
      padding: 10px;
      h3, p {
        margin: 0;
      }
      h3 {
        font-size: 1.4rem;
      }
   }
`

export const TextBox = styled.div`
   position: relative;
   width: 100%;
   span {
    position: absolute;
    right: 15px;
    top: 0px;
    @media (max-width: 610px) {
        display: none;
    }
}
`


export default BorderlessCard