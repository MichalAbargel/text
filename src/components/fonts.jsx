import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

class Fonts extends Component {
    render() { 
        return (
            <div>
                 <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Fonts
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item id='Arial' onClick={(event)=>{this.props.handleFontChose(event.target.id)}} href="#">Arial</Dropdown.Item>
                        <Dropdown.Item id='Tahoma' href="#"  onClick={(event)=>{this.props.handleFontChose(event.target.id)}}>Tahoma</Dropdown.Item>
                        <Dropdown.Item id='Georgia' href="#"  onClick={(event)=>{this.props.handleFontChose(event.target.id)}}>Georgia</Dropdown.Item>
                        <Dropdown.Item id='Garamond' href="#"  onClick={(event)=>{this.props.handleFontChose(event.target.id)}}>Garamond</Dropdown.Item>
                        <Dropdown.Item id='Courier New' href="#"  onClick={(event)=>{this.props.handleFontChose(event.target.id)}}>Courier New</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }
}
 
export default Fonts;