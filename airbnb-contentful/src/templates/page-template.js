import React from 'react'
import './zero.css'
// import styled from 'styled-components'
import { graphql } from "gatsby"

import PageContentSection from "../components/PageContentSection"

const PageTemplate = ({ data: { page, navbar } }) => {
  console.log(page);
  return (
    <PageContentSection title={page && page.title} content={page && page.content} navbar={navbar} />
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
            ... on ContentfulPageList {
              title
              componentId
              __typename
              contentful_id
              page {
                title
                featuredImage {
                  url
                }
                description {
                  description
                }
                slug
                node_locale
              }
            }
            ... on ContentfulMozaikLayoutCards {
              title
              componentId
              __typename
              contentful_id
              cards {
                title
                featuredImage {
                  url
                }
                description {
                  description
                }
                slug
                node_locale
              }
            }
            ... on ContentfulBorderlessSimpleCardList {
              title
              componentId
              __typename
              contentful_id
              cards {
                title
                image {
                  url
                }
                description {
                  description
                }
              }
            }
            ... on ContentfulAlertCard {
              title
              componentId
              __typename
              contentful_id
              card {
                title
                image {
                  url
                }
                description {
                  description
                }
              }
            }
            ... on ContentfulSlideShow {
              title
              componentId
              __typename
              contentful_id
              slide {
                  image {
                    url
                  }
                  title
                  description {
                    description
                  }
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
    navbar: contentfulPageList(node_locale: {eq: $node_locale}, componentId: {eq: "navbar"}) {
        title
        node_locale
        componentId
        __typename
        contentful_id
        page {
          title
          featuredImage {
            url
          }
          description {
            description
          }
          slug
          node_locale
          }
      }
}
`

export default PageTemplate
