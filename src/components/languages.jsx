import React, { Component } from 'react';


class Languages extends Component {
    render() { 
        return (
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked/>
                <label className="btn btn-outline-primary" htmlFor="btnradio1">English</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio2">Hebrew</label>
            </div>
        );
    }
}
 
export default Languages;