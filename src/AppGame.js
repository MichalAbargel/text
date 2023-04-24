import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import './App.css';
import Game from './comonentsGame/game';
import History from './comonentsGame/history';

class AppGame extends Component {
  state = { 
    players:[],
    currentPlayer:0,
    isGame:false,
    currentPlayerHistory:[]
    };

    deletePlayer = (name)=>{
        let newPlayersArray = [...this.state.players].filter(player=>{return player.name !== name});
        this.setState({
            players: newPlayersArray
        });
    }
    showHistory = (name)=>{
        let currentPlayer = [...this.state.players].filter(player=>{return player.name === name})[0];
        console.log(currentPlayer);
        this.setState({
            currentPlayerHistory: currentPlayer.history
        }, ()=>{console.log(this.state.currentPlayerHistory)});
    }
    handleAddPlayer = (name)=>{
        let newPlayer = {name:name,totalNumber:100, actions:0, 
            addOne:this.addOne, reduceOne:this.reduceOne,
            multiplyTwo:this.multiplyTwo, divideTwo:this.divideTwo, 
            disabled:true, delete:this.deletePlayer, disabledDelete:false,history:[], showHistory:this.showHistory
        };
        let oldPlayers = [...this.state.players];
        oldPlayers.push(newPlayer);
        this.setState(
            {
                players: oldPlayers
            }
        );
    }
    
    //handle actions
    addOne = (name)=>{
        this.handlePlayerMove();
        const playersArray = [...this.state.players];
        const playerToChangeIndex = playersArray.findIndex(p => p.name === name);
        const playerToChange = { ...playersArray[playerToChangeIndex] };
        playerToChange.totalNumber += 1;
        //add one action
        playerToChange.actions += 1;
        playersArray[playerToChangeIndex] = playerToChange;
        this.setState({ players: playersArray }, () => {
            this.checkWin(name);
        });
    }
    reduceOne = (name)=>{
        this.handlePlayerMove();
        const playersArray = [...this.state.players];
        const playerToChangeIndex = playersArray.findIndex(p => p.name === name);
        const playerToChange = { ...playersArray[playerToChangeIndex] };
        if(playerToChange.totalNumber >= 1){
            playerToChange.totalNumber -= 1;
            //add one action
            playerToChange.actions += 1;
            playersArray[playerToChangeIndex] = playerToChange;
            this.setState({ players: playersArray }, () => {
                this.checkWin(name);
            });
        }
    }
    multiplyTwo = (name)=>{
        this.handlePlayerMove();
        const playersArray = [...this.state.players];
        const playerToChangeIndex = playersArray.findIndex(p => p.name === name);
        const playerToChange = { ...playersArray[playerToChangeIndex] };
        playerToChange.totalNumber *= 2;
        //add one action
        playerToChange.actions += 1;
        playersArray[playerToChangeIndex] = playerToChange;
        this.setState({ players: playersArray }, () => {
            this.checkWin(name);
        });
    }
    divideTwo = (name)=>{
        this.handlePlayerMove();
        const playersArray = [...this.state.players];
        const playerToChangeIndex = playersArray.findIndex(p => p.name === name);
        const playerToChange = { ...playersArray[playerToChangeIndex] };

        if(playerToChange.totalNumber > 0){
            playerToChange.totalNumber /= 2;
            //add one action
            playerToChange.actions += 1;
            playersArray[playerToChangeIndex] = playerToChange;
            this.setState({ players: playersArray }, () => {
                this.checkWin(name);
            });
        }   
    }
    checkWin = (name)=>{
        let playersArray = [...this.state.players].filter(player=>{return player.name === name})
        console.log(playersArray[0]);
        if(playersArray[0].totalNumber === 100){
            // call win
            this.handleEndGame();
            // add win to player
        }
     }
     makeWinMassege = (name)=>{
        const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
        const appendAlert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')
        alertPlaceholder.append(wrapper)
        // Add event listener to the close button
        const closeButton = wrapper.querySelector('.btn-close')
        closeButton.addEventListener('click', () => {
        // Remove the alert from the DOM
        wrapper.remove()
    })
        }
        appendAlert('WOW! ' + name +' win!', 'success');
     }

    handleEndGame = ()=>{
        //enabled and disabled buttons
        let playersArray = [...this.state.players];
        playersArray.map(player=>{
            player.disabled = true;
            player.disabledDelete = false;
        });
        let winPlayer = [...playersArray].filter(player=>{return player.totalNumber === 100})[0];
        playersArray = [...playersArray].filter(player=>{return player.totalNumber !== 100});
        winPlayer.history.push({name:winPlayer.name, actions:winPlayer.actions});
        playersArray.push(winPlayer);
        this.setState({
            players:playersArray
        });
        this.setState({
            isGame:false
        });
        document.getElementById("startBtn").innerHTML = "Start Game";
        this.makeWinMassege(winPlayer.name);
    }

    randNumbers=()=>{
        let playersArray = [...this.state.players].map(player=>{
            player.totalNumber = Math.floor(Math.random() * 100);
        });
        this.setState({
            players:playersArray
        });
    }

    startGame = ()=>{
        //disabled delete buttons
        let playersArray = [...this.state.players].map(player=>{
            player.disabledDelete = true;
        });
        this.setState({
            players:playersArray
        });
        if(!this.state.isGame){
            this.setState({
                isGame:true
               });
            document.getElementById("startBtn").innerHTML = "Stop Game";
            //restart players
            this.randNumbers();
            //next move
            this.handlePlayerMove();
            }
        else{
            this.handleEndGame();
        }
     }
    
     handlePlayerMove = ()=>{
        const playersArray = [...this.state.players];
        //disabled previous player
        if(this.state.currentPlayer >= 1){
            playersArray[this.state.currentPlayer-1].disabled = true;
        }
        else{
            playersArray[this.state.players.length-1].disabled = true;
        }
        //enabled next player
        playersArray[this.state.currentPlayer].disabled = false;
        // move turn to next player
        this.setState({
            players:playersArray,
            currentPlayer: (this.state.currentPlayer + 1) % this.state.players.length
        })
     }
    
    render() { 
        return (
        <React.Fragment>
            <div class="container">
                <div class="row">
                    <div class="col-9">
                        <h2>Add Actor</h2>
                        <div id="liveAlertPlaceholder"></div>
                        <Form.Label htmlFor="inputPassword5">Name</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputName"
                        />
                        <Form.Text id="inputNameHelpBlock" muted>
                            Please add name of player to the gaem.
                        </Form.Text>
                        <button id="addActrBtn" type="button" className="btn btn-info m-4" onClick={() => {
                        const playerName = document.getElementById("inputName");
                        if (playerName) {
                            this.handleAddPlayer(playerName.value);
                        }
                        }} disabled={this.state.isGame} >Add Player</button>
                        <button id="startBtn" type="button" className="btn btn-danger m-2" onClick={this.startGame} disabled={this.state.players.length === 0}>Start Game</button>
                        <Game board={this.state.players}></Game>
                    </div>
                    <div class="col-2">
                        <h2 className='m-6'>History</h2>
                       <History history={this.state.currentPlayerHistory}></History>
                    </div>
                </div>
            </div>
        </React.Fragment>);
    }
}
 
export default AppGame;
