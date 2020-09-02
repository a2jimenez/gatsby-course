import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
  {
    site {
      siteMetadata {
        author
        data
        description
        person {
          age
        }
        title
      }
    }
  }
`

const Header = () => {
  const data = useStaticQuery(getData)
  console.log(data)
  return (
    <div>
      <h1>this is our heading</h1>
      <h1>title: {data.site.siteMetadata.title}</h1>
      <h1>name: {data.site.siteMetadata.description}</h1>
    </div>
  )
}

export default Header
