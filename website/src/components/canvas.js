import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Develop scaling based on dimentions vs clientDimentions (size in logical pixels vs actual pixels)

/*
function draw(canvas, scaleX, scaleY) {
    const ctx = canvas.getContext('2d');

    ctx.scale(scaleX, scaleY);

    // Using clientDimentions defines ACTUAL (screen) pixels vs the internal logical pixels of canvas
    ctx.clearRect(0, 0, ctx.clientWidth, ctx.clientHeight);

    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(ctx.clientWidth, ctx.clientHeight);
    ctx.stroke();
    ctx.closePath();
}
*/
const Canvas = props => {
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.stroke();
        ctx.closePath();
    }, []);
    /*const [scale, setScale] = React.useState({ x: 1, y: 1 });

    
    const calculateScaleX = () => (!canvasRef.current ? 0 : canvasRef.current.clientWidth / canvasRef.current.width);
    const calculateScaleY = () => (!canvasRef.current ? 0 : canvasRef.current.clientHeight / canvasRef.current.height);

    const resized = () => {
        canvasRef.current.width = canvasRef.current.clientWidth;
        canvasRef.current.height = canvasRef.current.clientHeight;
        setScale({ x: calculateScaleX(), y: calculateScaleY() });
    };

    React.useEffect(() => resized(), []);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        canvas.addEventListener("resize", resized);
        return () => canvas.removeEventListener("resize", resized);
    });

    React.useEffect(() => {
        draw(canvasRef.current, scale.x, scale.y);
    }, [scale]);
*/
    return <canvas ref={canvasRef} {...props}></canvas>
}

export default Canvas