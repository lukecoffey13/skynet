import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FractalHelpers } from './FractalHelpers.js'
import { FractalTree } from './FractalTree'

function getKeystroke(event) {
  let inputValue = event.target.value
  console.log(inputValue)
  renderApp()
}

function renderApp() {
  ReactDOM.render(
    <input
      onChange={getKeystroke}
      placeholder='Type something...'
      value=''
    />,
    document.getElementById('root')
  )
}

renderApp()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
