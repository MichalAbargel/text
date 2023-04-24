import React, { Component } from 'react';

class Letter extends Component {
    render() { 
        console.log(this.props.style[2]);
        return (
            <span style={{fontSize: this.props.style[1], fontFamily:`${this.props.style[2]}`, color:this.props.style[0]}}>{this.props.value}</span>
        );
    }
}
 
export default Letter;