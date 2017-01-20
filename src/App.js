import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
		currentEvent:"The event will occur here",
      	text: "Magic text apears here",
		Data: "Data appears here",
  	  	number: "The number will appear here",
		count: 0
    }
	this.update=this.update.bind(this)
  }
  update(e){
    this.setState({
		currentEvent: e.type,
		Data: e.target.val,
		text: this.refs.text.value, 
		number: this.refs.number.value,
		count: this.state.val + 1
	})

	
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Examples</h2>
    	</div>
	    	{/*Rendering at runtime*/}
    	    <p className="App-intro">
        	  <u><h1>Simple Rendering at runtime</h1></u>
        		<input ref="text" type="text" placeholder="Type your text here" onChange={this.update.bind(this)} /> 
          		<h2>=> {this.state.text}<br/></h2>
        	</p>
			{/*Using props children to access nested components*/}
	        <hr />
    	    <p className="App-intro">
        	  	<u><h1>Using props children to access nested components</h1></u>
          		<Button>I <Hearts /> Batman</Button><br/>
	          	<sub>The Text in the button is fetched through the data in the custom tag!</sub>
    	    </p>
			{/*Validation using proptypes and reference to components*/}
    	    <hr />
        	<p className="App-intro">
          		<u><h1>Validation using proptypes</h1></u> 
        		<input ref="number" type="number" placeholder="Enter a phone number" onChange={this.update.bind(this)} /> 
				<h6><Data number={this.state.number} /><br /></h6>
        	</p>
			{/*Synthetic event normalization*/}
	        <hr />
    	    <p className="App-intro">
        		<u><h1>Synthetic event system Normalization</h1></u>
				<textarea 
					placeholder="Event changes"
					onKeyPress={this.update} 
					onCopy={this.update} 
					onPaste={this.update} 
					onCut={this.update} 
					onFocus={this.update} 
					onBlur={this.update} 
					onDoubleClick={this.update} 
					onChange={this.update.bind(this)}
					cols="0" rows="0" />
				<h6>Event Change will occur here: {this.state.currentEvent}<br/></h6>
    	    </p>
			{/*Lifecycle methods*/}
    	    <hr />
        	<p className="App-intro">
          		<u><h1>Lifecyle Methods</h1></u> 
							<button onClick={this.update}><Hearts /> DC <Hearts /></button>
							<h5>No. of clicks => {this.state.count}</h5>
							<h6>The button updates it's value everytime it is clicked!</h6>
        	</p>
      	</div>
    );
  }
}

//propType Validation
const Data = (props) => <h2>Number is: {props.number}</h2>
Data.propTypes = {
  text(props, propName, component){
    if(!(propName in props)){
      return new Error(`Missing Input`);
    }
    if(props[propName].length < 10){
      return new Error (`${propName} was too short, it should be atleast 10 digits`)
    }
  }
}

//using react components as children for other components
// const Widget = (props) => {
//   return <input type="text" placeholder={props.placeholder} onChange={props.update} /> 
// }

//accessing nested data using props.children

const Button = (props) => <button>{props.children}</button>
class Hearts extends React.Component{
  render(){
    return <span>&hearts;</span>
  }
}

export default App;
