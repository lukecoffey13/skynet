import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles.css'

function Contact(props) {
  let {name, email, photoURL} = props
  let names = name.split(' ')
  let initials = names.map(name => name[0].toUpperCase()).join('')
  return (
    <div className='Contact'>
      <div className='Contact-avatar'>
        {initials}
        {photoURL && <img src={photoURL} />}
      </div>
      <span className='Contact-name'>
        {name}
      </span>
      <a href={"mailto:"+email}>
        {email}
      </a>
    </div>
    )
}

ReactDOM.render(
  <Contact
    name='James'
    email='james@frontarm.com'
    photoURL='https://frontarm.com/courses/react-fundamentals/james-k-nelson.jpg'
  />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
