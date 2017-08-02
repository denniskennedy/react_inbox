import React, { Component } from 'react';
import './App.css';
import Toolbar from "./Toolbar";
import MessageList from "./MessageList";
import Seeds from "./Seeds";

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            messages: Seeds
        }
    }

  render() {
    return (
      <div className="App">
        <h1>I'm Rendering!</h1>
        <Toolbar />
          <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
