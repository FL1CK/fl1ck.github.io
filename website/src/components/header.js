import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"


/*
TODO
Find a better way to represent navbar spacing
Put something better in terms of title
*/
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
    }}
  >

    
    <div className="navbar-wrapper" style={{
      margin: "auto auto auto 20px",
      display: "flex",
      width: "100%", // update to not use width?
      maxWidth: "500px",
    }}>
      <div
      style={{
        flex: 1,
      }}>
        <h4 style={{
          margin: 0,
        }}>
          <Link
            to="/page-2/"
            style={{
              color: "white",
              textDecoration: "none",
              textAlign: "right",
            }}>
            Me
          </Link>
        </h4>
        
      </div>

      <div
        style={{
          flex: 1,
        }}>
          <h4 style={{
            margin: 0,
          }}>
            <Link
              to="/page-2/"
              style={{
                color: "white",
                textDecoration: "none",
              }}>
              Portfolio
            </Link>
          </h4>
      </div>

      <div
        style={{
          flex: 1,
        }}>
          <h4 style={{
            margin: 0,
          }}>
            <Link
              to="/page-2/"
              style={{
                color: "white",
                textDecoration: "none",
              }}>
              Fun
            </Link>
          </h4>
      </div>
    </div>

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
