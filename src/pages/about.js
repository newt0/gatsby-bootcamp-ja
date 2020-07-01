import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>I'm me.</p>
      <p><Link to="/contact">Contact</Link></p>
    </Layout>
  )
}

export default AboutPage