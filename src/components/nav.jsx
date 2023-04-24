import React, { Component } from 'react';

class Nav extends Component {

    render() { 
        return (
            <div>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a id='English' className="nav-link" onClick={this.props.switchTab} href="#">English</a>
                  </li>
                  <li className="nav-item">
                    <a id='Hebrew' className="nav-link" onClick={this.props.switchTab} href="#">Hebrew</a>
                  </li>
                  <li className="nav-item">
                    <a id='Numbers' className="nav-link" onClick={this.props.switchTab} href="#">Numbers</a>
                  </li>
                  <li className="nav-item">
                    <a id='Emojis' className="nav-link" onClick={this.props.switchTab} href="#">Emojis</a>
                  </li>
                </ul>
            </div>
        );
    }
}
 
export default Nav;