import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <h1>This is the App component.</h1>
        {this.props.children}
      </div>
    )
  }
}

module.exports = connect()(App);
