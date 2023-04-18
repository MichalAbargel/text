import React, { Component } from 'react';

class Nav extends Component {
    render() { 
        return (
            <div>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Text</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Numbers</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Emojis</a>
                  </li>
                </ul>
            </div>
        );
    }
}
 
export default Nav;