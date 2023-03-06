import React from 'react'
import './zero.css'
// import styled from 'styled-components'
import { graphql } from "gatsby"
import { ColorRing } from 'react-loader-spinner'

import PageContentSection from "../components/PageContentSection"
import { useState, useEffect } from 'react'
import styled from 'styled-components'

const PageTemplate = ({ data: { page, navbar } }) => {
  // console.log(page);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [page])


  return (
    <>
      {isLoaded ?
        <PageContentSection title={page && page.title} content={page && page.content} navbar={navbar} lang={page && page} />
        :
        <LoaderSpinner>
          <ColorRing
            visible={true}
            height="200"
            width="200"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </LoaderSpinner>
      }
    </>
  )
}

export const LoaderSpinner = styled.div`
  width: 100vw !important;
  height: 100vh !important;
  display: flex;
  align-items: center !important;
  justify-content: center !important;
`

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
              sys {
                type
              }
            }
            ... on ContentfulShowHideCards {
              title
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
                link
              }
            }
            ... on ContentfulBorderlessSimpleCardList {
              title
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
                link
              }
            }
            ... on ContentfulFiftyFiftyCards {
              title
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
                link
              }
            }
            ... on ContentfulSearchEngine {
              title
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
                link
                tags
              }
            }
            ... on ContentfulAlertCard {
              title
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
            ... on ContentfulFullCoverCard {
              title
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
            ... on ContentfulInlineGallery {
              title
              __typename
              contentful_id
              image {
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
    navbar: contentfulPageList(node_locale: {eq: $node_locale}, title: {eq: "navbar"}) {
        title
        node_locale
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
