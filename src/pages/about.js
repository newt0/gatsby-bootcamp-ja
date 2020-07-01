import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'

const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>I'm me.</p>
      <p><Link to="/contact">Contact</Link></p>
      <Footer />
    </div>
  )
}

export default AboutPage