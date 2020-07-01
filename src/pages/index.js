import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Kyohei, a web developer living in Tokyo.</h2>
      <p>Need a developer?<Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage