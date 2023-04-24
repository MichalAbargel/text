import React, { Component } from 'react';
import HistoryItem from './historyItem';

class History extends Component {
    render() { 
        console.log(this.props.history);
        return (
            <ul class="list-group">
                {this.props.history.map(key=>(
                    <HistoryItem
                        key={key.name}
                        actions={key.actions}>
                    </HistoryItem>
                ))}
            </ul>
        )
    }
}
 
export default History;