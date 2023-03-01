import React from 'react'
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { ArrowDownCircleOutline, AddCircleOutline } from 'react-ionicons'

export const Navbar = ({ navbar }) => {
    const [isOpen, setIsOpen] = useState(false);
    const parentRef = useRef();
    let data = navbar.page
    return (
        <Header>
            <HeaderContent>
                <Link to="/"><h1>Airbnb of Kris</h1></Link>
                {isOpen ? <AddCircleOutline
                    color={'#00000'}
                    title={"asd"}
                    height="45px"
                    width="45px"
                    style={{ transform: "rotate(-45deg)" }}
                    onClick={() => setIsOpen(false)}
                /> : <ArrowDownCircleOutline
                    color={'#00000'}
                    title={'asd'}
                    height="45px"
                    width="45px"
                    onClick={() => setIsOpen(true)}
                />
                }
                <NavbarContent
                    ref={parentRef}
                    style={isOpen ? {
                        height: parentRef.current.scrollHeight + "px",
                    }
                        : {
                            height: "0px",
                        }
                    }
                >
                    <ul onClick={() => setIsOpen(false)}>
                        {data.map((el) => {
                            return (
                                <li><Link to={`/${el.node_locale}/${el.slug}`}>{el.title}</Link></li>
                            )
                        })}
                    </ul>
                </NavbarContent>
            </HeaderContent>
        </Header>

    )
}

export const Header = styled.div`
    background-color: #ff5a5f;
    height: 80px;
`
export const HeaderContent = styled.div`
    max-width: 600px;
    height: 80px;
    margin-left: auto;
    margin-right: auto;

    color: white;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;
    z-index: 100;
    padding: 0 15px;
    img {
        margin: 0;
        width: 60%;
    }
    ion-icon {
        color: white;
        font-size: 45px;
        cursor: pointer;
        width: 100px;
        text-align: right;
    }
    @media (max-width: 415px) {
        img {
          width: 80%;
        }
        ion-icon {
          width: 190px;
        }
      }
`
export const NavbarContent = styled.div`
    position: absolute;
    padding: 0;

    right: 0;
    top: 80px;

    height: 0;

    width: 100vw;
    max-width: 300px;

    background-color: #ff5a5f;
    color: white;

    transition: height ease 0.5s;
    overflow: hidden;
    ul {
        list-style: none;
        font-size: 25px;
        font-weight: bold;
        line-height: 40px;
      }
`