import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';
import Keyboard from './components/keyboard';
import TextArea from './components/text';
import SizeRange from './components/sizeRange';
import Languages from './components/languages';
import ColorPicker from './components/colorPicker';
import Fonts from './components/fonts';

class App extends Component {
  state = { 
    textArea: [],
    lastTextStyle: ['#0000D1', 40, 'Arial'],
    blockPickerColor:"#0000D1",
    undoStack:[],
    inputValue:[],
    defaultKeyboard:[],
    showUpperButton:false,
    keyboardEnglish: [{id:1, value:'a'}, {id:2, value:'b'}, {id:3, value:'c'},{id:4, value:'d'},{id:5, value:'e'},
        {id:6, value:'f'}, {id:7, value:'g'}, {id:8, value:'h'}, {id:9, value:'i'}, {id:10, value:'j'},
        {id:11, value:'k'}, {id:12, value:'l'}, {id:13, value:'m'}, {id:14, value:'n'}, {id:15, value:'o'}, {id:16, value:'p'},
        {id:17, value:'q'}, {id:18, value:'r'}, {id:19, value:'s'}, {id:20, value:'t'}, {id:21, value:'u'},
        {id:22, value:'v'}, {id:23, value:'w'}, {id:24, value:'x'}, {id:25, value:'y'}, {id:26, value:'z'}],
    keyboardEnglishUpper: [{id:1, value:'A'}, {id:2, value:'B'}, {id:3, value:'C'},{id:4, value:'D'},{id:5, value:'E'},
        {id:6, value:'F'}, {id:7, value:'G'}, {id:8, value:'H'}, {id:9, value:'I'}, {id:10, value:'J'},
        {id:11, value:'K'}, {id:12, value:'L'}, {id:13, value:'M'}, {id:14, value:'N'}, {id:15, value:'O'}, {id:16, value:'P'},
        {id:17, value:'Q'}, {id:18, value:'R'}, {id:19, value:'S'}, {id:20, value:'T'}, {id:21, value:'U'},
        {id:22, value:'V'}, {id:23, value:'W'}, {id:24, value:'X'}, {id:25, value:'Y'}, {id:26, value:'Z'}],
    keyboardHebrew: [{id:1, value:'א'}, {id:2, value:'ב'}, {id:3, value:'ג'},{id:4, value:'ד'},{id:5, value:'ה'},
        {id:6, value:'ו'}, {id:7, value:'ז'}, {id:8, value:'ח'}, {id:9, value:'ט'}, {id:10, value:'י'},
        {id:11, value:'כ'}, {id:12, value:'ל'}, {id:13, value:'מ'}, {id:14, value:'נ'}, {id:15, value:'ס'}, {id:16, value:'ע'},
        {id:17, value:'פ'}, {id:18, value:'צ'}, {id:19, value:'ק'}, {id:20, value:'ר'}, {id:21, value:'ש'},
        {id:22, value:'ת'}, {id:23, value:'ם'}, {id:24, value:'ן'}, {id:25, value:'ץ'}, {id:26, value:'ף'}, {id:27, value:'ך'}],
    keyboardNumbers: [{id:1, value:'1'}, {id:2, value:'2'}, {id:3, value:'3'},{id:4, value:'4'},{id:5, value:'5'},
        {id:6, value:'6'}, {id:7, value:'7'}, {id:8, value:'8'}, {id:9, value:'9'}],
    keyboardEmojis:[{id:1, value:'🙂'}, {id:2, value:'🤣'}, {id:3, value:'😉'}, 
    {id:4, value:'🥰'}, {id:5, value:'😘'}, {id:6, value:'🤨'}, {id:7, value:'😔'}, {id:8, value:'😭'}]
  }
  // keyboards
  handleKey= id =>{
    this.handleChangeStack([...this.state.textArea]);
    let char = this.state.defaultKeyboard.filter(k=> k.id === id)[0].value;
    let newTextArea = this.state.textArea;
    newTextArea.push({id:id, value:char, style:this.state.lastTextStyle});
    this.setState({textArea: newTextArea});
    
  };
  handlChangeSize = event => {
    let newStyle=[...this.state.lastTextStyle];
    newStyle[1] = event.target.value.toString() + 'px';
    this.setState({ lastTextStyle: newStyle });
  }

  handleColorChange = color =>{
    console.log(this.state.blockPickerColor);
    let newStyle = [...this.state.lastTextStyle];
    newStyle[0] = color.hex;
    this.setState({
      blockPickerColor: color.hex,
      lastTextStyle:newStyle
    });
  }
  handlDeleteAll = ()=>{
    this.setState({
      textArea:[]
    });
  }
  handleUndo = () => {
    const { undoStack } = this.state;
    if (undoStack.length > 0) {
      this.setState({
        textArea:undoStack[undoStack.length -1],
        undoStack: undoStack.slice(0, -1)
      });
    }
  };
  handleChangeStack = (change)=>{
    const { undoStack } = this.state;
    this.setState({
      undoStack: [...undoStack, change],
    });
  };
  handleSwithTab = (event)=>{
    switch (event.target.id) {
      case 'English':
        this.setState({
          defaultKeyboard:this.state.keyboardEnglish,
          showUpperButton:true
        });
      break;
      case 'Hebrew':
        this.setState({
          defaultKeyboard:this.state.keyboardHebrew,
          showUpperButton:false
        });
      break;
      case 'Numbers':
        this.setState({
          defaultKeyboard:this.state.keyboardNumbers,
          showUpperButton:false
        });
      break;
      case 'Emojis':
        this.setState({
          defaultKeyboard:this.state.keyboardEmojis,
          showUpperButton:false
        });
      break;
      default:
        this.setState({
          defaultKeyboard:this.state.keyboardEnglish,
          showUpperButton:true
        })
        console.log('default');
      break;
    }
  }

  handleUpperClick = ()=>{
    if(this.state.defaultKeyboard === this.state.keyboardEnglish){
      this.setState({
        defaultKeyboard:this.state.keyboardEnglishUpper
      });
    }
    else{
      this.setState({
        defaultKeyboard:this.state.keyboardEnglish
      });
    }
    
  }
  handleFontChose = (font)=>{
    let newLastTextStyle = [...this.state.lastTextStyle];
    newLastTextStyle[2] = font;
    this.setState({
      lastTextStyle: newLastTextStyle
    });
  }

  changeAllText=()=>{
    console.log(this.state.textArea);
    let newTextArea = [...this.state.textArea];
    for (let index = 0; index < newTextArea.length; index++) {
      newTextArea[index].style = this.state.lastTextStyle;
    }    
    console.log(newTextArea);
    this.setState({
      textArea: newTextArea
    })
  }

  render() { 
    return (
    <React.Fragment>
      <div className="container text-center container-md">
        <div className="row">
            <div id="keybords" className="col">
              <Nav switchTab={this.handleSwithTab}></Nav >
              <Keyboard keyboard={this.state.defaultKeyboard} onclick={this.handleKey}></Keyboard>
              {this.state.showUpperButton && 
              <button type="button" className="btn btn-info m-2" onClick={this.handleUpperClick}>UPPER</button>
              }              
              <button id="clearAllBtn" type="button" className="btn btn-success m-2" onClick={this.handlDeleteAll}>Clear All</button>
              <button id="choseAllBtn" type="button" className="btn btn-success m-2" onClick={this.changeAllText}>Change All</button>
              <button id="undoBtn" type="button" className="btn btn-danger m-2" onClick={this.handleUndo} disabled={this.state.undoStack.length === 0}>Undo</button>
              <SizeRange onSizeChanged = {this.handlChangeSize}></SizeRange>
              <Fonts handleFontChose={this.handleFontChose}></Fonts>
              <ColorPicker blockPickerColor={this.state.blockPickerColor} colorChange={this.handleColorChange}></ColorPicker>
            </div>
            <div className="col-6">
              <TextArea text={this.state.textArea} />
            </div>
          </div>
      </div>
    </React.Fragment>);
  }
}
 
export default App;
