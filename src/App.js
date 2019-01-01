import React, { Component } from 'react';
import './App.css';
import Product from './product/product';
class App extends Component {
  render() {
    return (
      <div className="container">
          <Product />
      </div>
    );
  }
}

export default App;
