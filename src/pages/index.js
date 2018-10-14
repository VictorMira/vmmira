import React from 'react'
import { Link } from 'gatsby'

import hero from './hero.jpeg'


import Layout from '../components/layout'

const IndexPage = () => (
  
  <Layout>
    <img src={hero} alt='Hands typing on a keyboard' />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      <li><Link to="/contact/">Go to Contact</Link></li>
     
    </ul>
 
  </Layout>
)

export default IndexPage
