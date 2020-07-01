import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <h2>I'm Kyohei, a web developer living in Tokyo.</h2>
      <p>Need a developer? <a href="/contact">Contact me.</a></p>
      <p>Need a developer?<Link to="/contact">Contact me.</Link></p>
    </div>
  )
}

export default IndexPage