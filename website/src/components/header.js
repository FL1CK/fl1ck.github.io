import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      display: "grid",
      gridTemplateColumns: "1fr 2fr",
    }}
  >
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

    <div style={{
      margin: "auto 0 auto auto",
      display: "flex",
      width: "100%",
      maxWidth: "500px",
      float: "right",
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
                textAlign: "right",
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
                textAlign: "right",
              }}>
              Fun
            </Link>
          </h4>
      </div>
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
