import * as React from "react"
import './zero.css'
import { graphql } from "gatsby"

export default function Home({ data }) {
  let page_template = data.allContentfulPage.edges[0].node
  console.log(data.allContentfulPage.edges[0].node);
  return (
    <div>
      {/* <PageContentSection title={page_template.title} content={page_template.content} /> */}
    </div>
  )
}

export const query = graphql`
query MyQuery {
  allContentfulPage {
    edges {
      node {
        content {
          raw
          references {
            ... on ContentfulAsset {
              __typename
              contentful_id
              description
              file {
                url
              }
            }
          }
        }
        contentful_id
        description {
          description
        }
        node_locale
        title
        featuredImage {
          url
        }
      }
    }
  }
}
`