import React from 'react'
import styled from 'styled-components'
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { OpenOutline, SadSharp } from 'react-ionicons'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import MenuList from '../components/MenuList'
import { GuideSlide } from '../components/GuideSlide'
import BorderlessCard from './BorderlessCard'
import { AlertBox } from './AlertBox'
import { Navbar } from './Navbar'
import { MozaikCards } from './MozaikCards'


const PageContentSection = ({ title, content, navbar }) => {
    // console.log(navbar);
    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                // console.log(node);
                let link = node.data.target.description;
                if (link) {
                    return <a href={link} target={link.includes("http") && "_blank"}><img src={node.data.target.file.url} alt="" /></a>
                } else return <img src={node.data.target.file.url} alt="" />
            },
            [BLOCKS.EMBEDDED_ENTRY]: (node) => {
                console.log(node);
                let data = node.data.target
                switch (data.componentId) {
                    case "pageList":
                        return (
                            data.page.filter(el => el.featuredImage !== null).map(elem => {
                                return (
                                    <MenuList
                                        props={elem}
                                    />
                                )
                            })
                        )
                    case "slideShow":
                        return (
                            <GuideSlide
                                props={data.slide}
                            />
                        )
                    case "BorderlessCard":
                        return (
                            <BorderlessCard
                                props={data.cards}
                            />
                        )
                    case "AlertBox":
                        return (
                            <AlertBox
                                props={data.card}
                            />
                        )
                    case "mozaik":
                        return (
                            <MozaikCards
                                props={data.cards}
                            />
                        )
                }
            }
            // [INLINES.HYPERLINK]: (node) => {
            //     console.log(node);
            //     return <a href={node.data.uri}>{node.content[0].value}</a>
            // }
        }
    }

    const output = content && renderRichText(content, options)
    console.log(output);

    return (
        <div>
            <Navbar navbar={navbar} />
            <PageTitle>{title}</PageTitle>
            <PageContent>
                {output}
            </PageContent>
        </div>
    )
}

export const PageTitle = styled.h3`
    background-color: rgb(255, 235, 238);
    padding: 10px;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 15px;
    max-width: 580px;

    margin-right: auto !important;
    margin-left: auto !important;
`

export const PageContent = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 5px 10px;
`

export default PageContentSection

