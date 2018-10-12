import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({data}) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      <li><Link to="/page-2/">Go to page 2</Link></li>
      <li><Link to="/page-3/">Go to page 3</Link></li>
      <li><Link to="/page-4/">Go to page 4</Link></li>
    </ul>
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

export default IndexPage
