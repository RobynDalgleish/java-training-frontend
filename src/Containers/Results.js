import React from 'react';
import axios from 'axios';
import config from '../Components/config.js';

class Results extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        quote: []
    }
}
  call() {
    axios.get(`${config.quoteApiURL}`,{
        params: {
            name: this.props.name
        }
    })
      .then(({ data }) => {
      this.setState({ 
        quote: data.quote
      })
    });
  }

  render() {
    return (
      <div>
          <p>{this.state.quote}</p>
      </div>
    )
  }
}

export default Results;
