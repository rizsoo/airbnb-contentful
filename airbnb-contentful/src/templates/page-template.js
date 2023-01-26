import React from 'react'
import styled from 'styled-components'
import { graphql } from "gatsby"
import PageContentSection from "../components/PageContentSection"

const PageTemplate = ({ data: { page } }) => {
    console.log(page);
    return (
        <div>
            <PageContentSection title={page.title} content={page.content} />
        </div>
    )
}

export const query = graphql`
query MyQuery($slug: String, $node_locale: String) {
  page: contentfulPage(slug: { eq: $slug }, node_locale: { eq: $node_locale }) {
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
        slug
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
`

export default PageTemplate
