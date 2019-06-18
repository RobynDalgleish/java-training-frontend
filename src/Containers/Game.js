import React from 'react';
import Results from './Results';
  
  class Game extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        value: '',
        finalValue: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.triggerCall = this.triggerCall.bind(this);
    }

    triggerCall(){
      this.refs.results.call();
  }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.setState({finalValue: this.state.value});
      this.triggerCall();
    }

    render() {
      return (
        <div>
          <div className="App">
            <form onSubmit={this.handleSubmit}>
              <label>
                Type your name:
                <input name={this.state.finalValue} type="text" value={this.state.value} onChange={this.handleChange} className="App-input" />
              </label>
              <input type="submit" value="Submit"/>
            </form>
            <Results ref="results" name={this.state.finalValue}></Results>
          </div>    
        </div>
      )
    }
  }

  export default Game;
