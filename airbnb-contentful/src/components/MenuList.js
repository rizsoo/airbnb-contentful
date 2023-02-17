import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const MenuList = ({ ...props }) => {
    // console.log(props);
    return (
        <MenuBox>
            <Link to={`${props.node_locale}/${props.slug}`}>
                <MenuSection>
                    <img src={props.featured_image} alt='image_menu' />
                    <div>
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                    </div>
                </MenuSection>
                {/* <Link to={props.link}><button>{t("read")}</button></Link> */}
            </Link>
        </MenuBox>
    )
}

export default MenuList

export const MenuBox = styled.div`
    width: calc(100vw - 30px);
    max-width: 600px;
    min-height: 100px;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 10px;
    overflow: hidden;

    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 13px auto;
    @media (max-width: 415px) {
        align-items: center;
        min-height: 90px;
    }
    h3 {
        background-color: white;
        padding: 0px 10px 5px 10px;
        margin: 0;
        font-size: 25px;
        font-weight: bold;
        word-break: break-word;
    }
    img {
        height: 95px;
        width: 95px;
        object-fit: cover;
        border-radius: 7px;
    }
    p {
        padding: 0 10px;
        line-height: 20px;
        font-size: 13px;
        color: grey;
        margin: 0;
    }
    button {
        border-radius: 10px;
        height: 33px;
        font-weight: bold;
        background-color: rgb(241, 241, 241);
        color: rgb(0, 157, 255);
        border: unset;
        padding: 0px 12px;
        outline: unset;
    }
`
export const MenuSection = styled.div`
    display: flex;
    width: calc(100vw - 50px);
    max-width: 580px;
    @media (max-width: 415px) {
          align-items: center;
          min-height: 90px;
      }
`