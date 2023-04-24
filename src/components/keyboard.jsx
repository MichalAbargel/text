import React, { Component } from 'react';
import Key from './key';

class Keyboard extends Component {
    render() {
        return (
        <div>
            {this.props.keyboard.map(key=>(
                <Key 
                    key={key.id} 
                    id = {key.id}
                    value = {key.value}
                    onclick={this.props.onclick}>
                </Key>
            ))}
        </div>
        );
    }
}
 
export default Keyboard;

