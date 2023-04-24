import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { act } from 'react-dom/test-utils';

class Player extends Component {
    doAction = (action, name)=>{
        switch (action) {
            case 'addOne':
                this.props.addOne(name);
                break;
            case 'reduceOne':
                this.props.reduceOne(name);
                break;
            case 'multiplyTwo':
                this.props.multiplyTwo(name);
                break;
            case 'divideTwo':
                this.props.divideTwo(name);
                break;
            default:
                break;
        }
    }
    render() { 
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('./media/boy.png').default}/>
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            <label htmlFor="TotalNumber">Total Number:</label>
                            <span className='m-2'>{this.props.totalNumber}</span>
                            <label htmlFor="Actions">Actions:</label>
                            <span className='m-2'>{this.props.actions}</span>
                        </Card.Text>
                        <Button id='addOne' variant="primary m-2" onClick={(event)=>{this.doAction(event.target.id, this.props.name)}} disabled={this.props.disabled}>+1</Button>
                        <Button id='reduceOne' variant="primary m-2" onClick={(event)=>{this.doAction(event.target.id, this.props.name)}} disabled={this.props.disabled}>-1</Button>
                        <Button id='multiplyTwo' variant="primary m-2" onClick={(event)=>{this.doAction(event.target.id, this.props.name)}} disabled={this.props.disabled}>*2</Button>
                        <Button id='divideTwo' variant="primary m-2" onClick={(event)=>{this.doAction(event.target.id, this.props.name)}} disabled={this.props.disabled}>/2</Button>
                        <Button id='deletePlayer' variant="danger m-2" onClick={()=>{this.props.delete(this.props.name)}} disabled={this.props.disabledDelete}>Delete Board</Button>
                        <p><a href="#" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" onClick={()=>{this.props.showHistory(this.props.name)}}>History</a></p>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
 
export default Player;