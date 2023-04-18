import React, { Component } from 'react';
import Key from './key';
import SizeRange from './sizeRange';
import Languages from './languages';

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
            <button type="button" className="btn btn-info m-2">UPPER</button>
            <SizeRange></SizeRange>
            <Languages></Languages>
            <button id="undoBtn" type="button" className="btn btn-outline-success m-4">Undo Last Action</button>
        </div>
        );
    }
}
 
export default Keyboard;