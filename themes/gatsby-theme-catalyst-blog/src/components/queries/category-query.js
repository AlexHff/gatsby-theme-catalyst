import React from "react"
import { graphql } from "gatsby"
import Category from "../templates/category-template"

export default ({ data, pageContext }) => {
  const { allCatalystPost } = data
  const category = pageContext.category
  return <Category posts={allCatalystPost.nodes} category={category} />
}

export const query = graphql`
  query($category: String) {
    allCatalystPost(
      sort: { fields: [date, title], order: DESC }
      limit: 1000
      filter: { draft: { eq: false }, categories: { in: [$category] } }
    ) {
      nodes {
        id
        excerpt
        slug
        title
        subTitle
        author
        authorLink
        date(formatString: "MMMM DD, YYYY")
        tags
        categories
        timeToRead
        postType
      }
    }
  }
`
