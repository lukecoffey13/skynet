import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FractalHelpers } from './FractalHelpers.js'
import { FractalTree } from './FractalTree'

function FractalTreeFrame() {
  let time = Date.now()
  return (
    <FractalTree
      lean={0.1*Math.sin(time/2000)}
      size={100}
      sprout={0.3 + 0.05*Math.sin(time/1300)}
    />
  )
}

function renderFrame(props) {
  let time = Date.now()
  
  ReactDOM.render(
    <FractalTree
      lean={0.1*Math.sin(time/2000)}
      size={100}
      sprout={0.3 + 0.05*Math.sin(time/1300)}
    />,
    document.getElementById('root')
  )
  
   window.setTimeout(renderFrame)
}

renderFrame()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
