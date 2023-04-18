import React, { Component } from 'react';

class SizeRange extends Component {
    render() { 
        return (
            <div>
                <label htmlFor="customRange1" className="form-label">Size</label>
                <input type="range" className="form-range" id="sizeRange"></input>
            </div>
        );
    }
}
 
export default SizeRange;