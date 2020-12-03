import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';

/*
class ShoppingList extends React.Component{
  render(){
    return(
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>Instagram</li>
          <li>Instagram</li>
        </ul>
      </div>
    );
  }
}
//supaprastina versija virsuj esancio kodo  (JSX)

return React.createElement('div', {className:'shopping-list'},
React.createElement('h1',...)
React.createElement('u1',...)
);
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
