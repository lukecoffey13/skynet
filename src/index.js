import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FractalHelpers } from './FractalHelpers.js'

//Version 1 - their solution
function FractalBox(props) {
  if (props.depth > props.maxDepth) {
    return null
  }
  else {
    return (
    <div>
        <div style={FractalHelpers({
          depth: props.depth,
          heightFactor: 0.4,
          lean: props.lean,
          maxDepth: props.maxDepth,
          side: props.side,
        })}>
          <FractalBox
            depth = {props.depth + 1}
            lean = {props.lean}
            side = 'left'
            sprout = {props.sprout}
            size = {props.size}
          />
          <FractalBox
            depth = {props.depth + 1}
            lean = {props.lean}
            side = 'right'
            sprout = {props.sprout}
            size = {props.size}
          />
      </div>
      </div>
    )
  }
}

//Version 2 - my solution
function FractalBox2(props) {
  if (props.depth > props.maxDepth) {
    return null
  }
  else {
    return (
    <div>
        <div style={FractalHelpers({
          depth: props.depth,
          heightFactor: 0.4,
          lean: 0,
          maxDepth: props.maxDepth,
          side: 'left',
        })}>
         <FractalBox depth={props.depth + 1} />
        </div>
        <div style={FractalHelpers({
          depth: props.depth,
          heightFactor: 0.4,
          lean: 0,
          maxDepth: props.maxDepth,
          side: 'right',
        })}>
          <FractalBox depth={props.depth + 1} />
        </div>
      </div>
    )
  }
}

FractalBox.defaultProps = {
  depth: 1,
  maxDepth: 8,
}

ReactDOM.render(
  <FractalBox
    // You probably don't want to change this. See below for why.
    maxDepth={8}
  />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
