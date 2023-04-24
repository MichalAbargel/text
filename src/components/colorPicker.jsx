import React, { Component } from 'react';
import { BlockPicker } from "react-color";
import { useState } from "react";

class ColorPicker extends Component {
  render() {
    return (
      <div className="App">
        <div className="blockpicker">
          <BlockPicker
            color={this.props.blockPickerColor}
            onChange={this.props.colorChange}
          />
        </div>
      </div>
    );
  }
}
 
export default ColorPicker;