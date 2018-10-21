import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'

import './layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div >
          {children}
        </div>

        <Footer />
      </>
    )}
  />
)



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
