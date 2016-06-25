import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <div className="container">Hello React in ES6 style</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
