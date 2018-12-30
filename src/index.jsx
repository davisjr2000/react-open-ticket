import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import '../assets/stylesheets/application.scss';

const Hello = ({ name }) => {
  return (
    <div>
      Hello,
      {name}
      <App />
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
