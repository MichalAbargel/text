import React, { Component } from 'react';
import './App.css';
import Keyboard from './components/keyboard';
import Nav from './components/nav';

class App extends Component {
  state = { 
    textArea: "",
    keyboard: [{id:1, value:'a'}, {id:2, value:'b'}, {id:3, value:'c'},{id:4, value:'d'},{id:5, value:'e'},
    {id:6, value:'f'}, {id:7, value:'g'}, {id:8, value:'h'}, {id:9, value:'i'}, {id:10, value:'j'},
    {id:11, value:'k'}, {id:12, value:'l'}, {id:13, value:'m'}, {id:14, value:'n'}, {id:15, value:'o'}, {id:16, value:'p'},
    {id:17, value:'q'}, {id:18, value:'r'}, {id:19, value:'s'}, {id:21, value:'t'}, {id:22, value:'u'},
    {id:23, value:'v'}, {id:24, value:'w'}, {id:25, value:'x'}, {id:26, value:'y'}, {id:27, value:'z'}]
  };

  handleKey= id =>{
    let char = this.state.keyboard.filter(k=> k.id === id)[0].value;
    let newText = this.state.textArea + char;
    this.setState({textArea: newText});
    
  };

  render() { 
    return (
    <React.Fragment>
      <div className="container text-center container-md">
        <div className="row">
            <div id="keybords" className="col">
              <Nav></Nav>
              <Keyboard 
                keyboard = {this.state.keyboard}
                onclick={this.handleKey}>
              </Keyboard>
            </div>
            <div className="col-6">
              <h2 className='m-4'>{this.state.textArea}</h2>
            </div>
          </div>
      </div>
    </React.Fragment>);
  }
}
 
export default App;
