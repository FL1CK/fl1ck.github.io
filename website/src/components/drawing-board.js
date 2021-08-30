import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import Canvas from "./canvas.js"


const DrawingBoard = ({ children, message }) => {
    let bottomCanvas = <canvas id="bottom-canvas" style={{
        width: "100%",
        height: "100%",
        position: "absolute"
    }}></canvas>

    return (
    <div className="drawing-board-wrapper" style={{
        width: "100%",
        height: "100%",
    }}>
        <StaticImage src="../images/output.svg" alt="" style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 0,
        }}></StaticImage>

        <div className="message-wrapper" style={{
        }}>
        </div>

        <Canvas style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 2,
        }}>
        </Canvas>
        {children}
    </div>)
}

DrawingBoard.propTypes = {
    children: PropTypes.node,
    message: PropTypes.string,
}

DrawingBoard.defaultProps = {
    message: "Goober city",
}

export default DrawingBoard