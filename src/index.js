import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Contact } from './Contact.js'
import { billionaires } from './billionaires.js'

/*** put your `ContactList` component here ***/
function ContactList(props) {
  return (
    <div className='ContactList'>
      <h2 className='ContactList-title'>Contacts</h2>
      {props.children}
    </div>
  )
}

let contactElements = billionaires.map(billionaire =>
  // The ... adds all properties from `billionaire`
  // to the <Contact> element's props.
  <Contact {...billionaire} key={billionaire.email} />
)


ReactDOM.render(
  <React.StrictMode>
    <ContactList>{contactElements}</ContactList>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
