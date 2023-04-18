import React, { Component } from 'react';


class Key extends Component {
    state = {  } 
    handleClice = () =>{
        this.props.onclick(this.props.id);
    };
    render() { 
        return (
        <button type="button" className="btn btn-light m-2"
            onClick={this.handleClice}>{this.props.value}
        </button>);
    }
}
 
export default Key;