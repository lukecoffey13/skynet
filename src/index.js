import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FractalTreeBranch from './FractalTreeBranch'

// The height and width of the entire window
const { innerHeight, innerWidth } = window

// Store the current mouse position
let mousePosition = {
  x: innerWidth / 2,
  y: innerHeight / 2,
}

function renderFrame(event) {
  // Compute "lean" and "sprout" based on time and current mouse position
  let time = Date.now()
  let fromHorizontalCenter = (innerWidth / 2 - mousePosition.x) / innerWidth
  let fromVerticalCenter = (innerHeight / 2 - mousePosition.y) / innerHeight
  let lean = 0.03 * Math.sin(time / 2000) + fromHorizontalCenter / 4
  let sprout =
    0.3 +
    0.05 * Math.sin(time / 1300) +
    fromVerticalCenter / 5 -
    0.2 * Math.abs(0.5 - fromHorizontalCenter / 2)

  ReactDOM.render(
    <div
      onMouseMove={(event) => {
        mousePosition.x = event.clientX
        mousePosition.y = event.clientY
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow: 'hidden',
      }}>
      <FractalTreeBranch lean={lean} size={150} sprout={sprout} />
    </div>,
    document.getElementById('root'),
  )

  // Schedule another frame
  window.requestAnimationFrame(renderFrame)
}

// Render the first frame
renderFrame()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
