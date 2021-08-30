import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import DrawingBoard from "../components/drawing-board"


const IndexPage = () => (
  <div className="body-wrapper" style={{
    minWidth: "100%",
    minHeight: "100%",
    padding: "auto"
  }}>
    <Layout>
      <Seo title="Home" />
      <DrawingBoard>Hellos</DrawingBoard>
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  </div>

)

export default IndexPage
