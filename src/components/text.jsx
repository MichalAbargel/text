import React, { Component } from 'react';
import Letter from './char';

class TextArea extends Component {
    render() { 
        return (
            <div>
                {this.props.text.map(key=>(
                <Letter 
                    key={key.id}
                    value = {key.value}
                    style = {key.style}>
                </Letter>
            ))}
            </div>
        );
    }
}
 
export default TextArea;