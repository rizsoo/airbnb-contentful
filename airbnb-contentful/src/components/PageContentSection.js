import React from 'react'
import styled from 'styled-components'
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import MenuList from '../components/MenuList'
import BorderlessCard from './BorderlessCard'
import { AlertBox } from './AlertBox'
import { Navbar } from './Navbar'
import { MozaikCards } from './MozaikCards'
import { ShowhideCards } from './ShowhideCards'
import { InlineGallery } from './Atoms/InlineGallery'
import FiftyFiftyBox from './FiftyFiftyBox'
import { Search } from './Search'
import { FullCoverCard } from './FullCoverCard'
import { Localization } from './Localization'
import { useState } from 'react'

const PageContentSection = ({ title, content, navbar, lang }) => {
    // console.log(content);
    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                // console.log(node);
                let link = node.data.target.description;
                if (link) {
                    return <a href={link} target={link.includes("http") && "_blank"} rel="noreferrer"><img src={node.data.target.file.url} alt="" /></a>
                } else return <img src={node.data.target.file.url} alt="" />
            },
            [INLINES.HYPERLINK]: (node) => {
                // console.log(node);
                let link = node.data.uri
                return <a href={link} target={link.includes("http") && "_blank"} rel="noreferrer">{node.content[0].value}</a>
            },
            [BLOCKS.EMBEDDED_ENTRY]: (node) => {
                // console.log(node);
                let data = node.data.target
                switch (data.__typename) {
                    case "ContentfulPageList":
                        return (
                            data.page.filter(el => el.featuredImage !== null).map(elem => {
                                return (
                                    <MenuList
                                        props={elem}
                                    />
                                )
                            })
                        )
                    case "ContentfulBorderlessSimpleCardList":
                        return (
                            <BorderlessCard
                                props={data.cards}
                            />
                        )
                    case "AlertContentfulAlertCardBox":
                        return (
                            <AlertBox
                                props={data.card}
                            />
                        )
                    case "ContentfulMozaikLayoutCards":
                        return (
                            <MozaikCards
                                props={data.cards}
                            />
                        )
                    case "ContentfulShowHideCards":
                        return (
                            <ShowhideCards
                                props={data.cards}
                                lang={lang}
                            />
                        )
                    case "ContentfulInlineGallery":
                        return (
                            <InlineGallery
                                images={data.image}
                            />
                        )
                    case "ContentfulFiftyFiftyCards":
                        return (
                            <FiftyFiftyBox
                                data={data.cards}
                            />
                        )
                    case "ContentfulSearchEngine":
                        return (
                            <Search
                                data={data.cards}
                            />
                        )
                    case "ContentfulFullCoverCard":
                        return (
                            <FullCoverCard
                                data={data.cards}
                            />
                        )
                    default:
                        return null
                }
            }
        }
    }

    const output = content && renderRichText(content, options)
    // console.log(output);

    return (
        <div>
            <Navbar navbar={navbar} lang={lang} />
            <PageTitle>{title}</PageTitle>
            <PageContent>
                {output}
            </PageContent>
            <Localization data={lang} />
        </div>
    )
}

export const PageTitle = styled.h3`
    background-color: rgb(255, 235, 238);
    padding: 10px;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 0px;
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

