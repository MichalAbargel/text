import React, { Component } from 'react';
import Player from './player';

class Game extends Component {
    render() { 
        return (
            <div className='card-group'>
            {this.props.board.map(key=>(
                <Player 
                    key={key.name} 
                    name={key.name}
                    totalNumber={key.totalNumber}
                    actions={key.actions}
                    addOne = {key.addOne}
                    reduceOne={key.reduceOne}
                    multiplyTwo={key.multiplyTwo}
                    divideTwo={key.divideTwo}
                    disabled={key.disabled}
                    delete = {key.delete}
                    disabledDelete={key.disabledDelete}
                    history={key.history}
                    showHistory={key.showHistory}>
                </Player>
            ))}
        </div>
        );
    }
}
 
export default Game;