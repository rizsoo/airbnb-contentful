import React from 'react'
import './zero.css'
// import styled from 'styled-components'
import { graphql } from "gatsby"

import PageContentSection from "../components/PageContentSection"
import MenuList from '../components/MenuList'

const PageTemplate = ({ data: { page, navbar } }) => {
  console.log(navbar);
  return (
    <div>
      <PageContentSection title={page && page.title} content={page && page.content} />
      {page.component && page.component.map((el, i) => {
        console.log(el);
        return (
          <MenuList
            key={i}
            title={el.title}
            description={el.description.description}
            featured_image={el.featuredImage ? el.featuredImage.url : el.image.url}
            slug={el.slug}
            node_locale={el.node_locale}
          />
        )
      })}
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
        component {
          ... on ContentfulPage {
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
          ... on ContentfulSimpleCard {
            image {
              url
            }
            title
            description {
              description
            }
          }
        }
        featuredImage {
          url
        }
    }
    navbar: allContentfulMenu {
      nodes {
        menuItem {
          title
          slug
          node_locale
        }
      }
    }
}
`

export default PageTemplate
