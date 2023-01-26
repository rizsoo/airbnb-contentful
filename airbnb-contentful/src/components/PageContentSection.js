import React from 'react'
import styled from 'styled-components'
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderRichText } from "gatsby-source-contentful/rich-text"

const PageContentSection = ({ title, content }) => {
    console.log(content);
    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                console.log(node);
                let link = node.data.target.description;
                if (link) {
                    return <a href={link} target={link.includes("http") && "_blank"}><img src={node.data.target.file.url} alt="" /></a>
                } else return <img src={node.data.target.file.url} alt="" />
            },
            // [INLINES.HYPERLINK]: (node) => {
            //     console.log(node);
            //     return <a href={node.data.uri}>{node.content[0].value}</a>
            // }
        }
    }

    const output = content && renderRichText(content, options)
    // console.log(output);

    return (
        <div>
            <PageTitle>{title}</PageTitle>
            <PageContent>
                {output}
            </PageContent>
        </div>
    )
}

export default PageContentSection

export const PageTitle = styled.h3`
    background-color: rgb(255, 235, 238);
    padding: 10px;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 15px;
    max-width: 600px;

    margin-right: auto !important;
    margin-left: auto !important;
`

export const PageContent = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 5px 10px;
`