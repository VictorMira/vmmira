import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const Blog = ({data}) => (
  <Layout>
    <h1>Hi from the Blog page</h1>
    <p>Welcome to Blog page</p>
    <Link to="/">Go back to the homepage</Link>
  
<h2>Index</h2>
    <ul>
    {data.allMarkdownRemark.edges.map(post => (
      <li>
        <Link
          key={post.node.id} 
          to={post.node.frontmatter.path}
          >{post.node.frontmatter.title}
        </Link>
      </li>
    ))}
    </ul>
  </Layout>
)
// Query para buscar los post del blog y crear un índice.
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [ frontmatter___date], order: DESC}
      filter: { frontmatter: { published: { eq: true } } }
      ){
      edges{
        node {
          id
          frontmatter{
            title
            path
            date
          }
        }
      }
    }
  }
`


export default Blog
