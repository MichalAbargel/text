import React, { Component } from 'react';

class HistoryItem extends Component {
    render() { 
        return (
            <li class="list-group-item"> {'Game: ' + this.props.actions}</li>
        );
    }
}
 
export default HistoryItem;