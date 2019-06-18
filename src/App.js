import React from 'react';
import Game from './Containers/Game.js';
import Results from './Containers/Results';
import config from './Components/config.js';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div>
        <Router onUpdate={() => window.scrollTo(0, 0)} >
          <div>
            <Game></Game>
            {/* :genre_id creates a variable. Now from the componant "SearchResults" you can access a piece of data passed through the URL. (So /searchResults/:apple would make {this.props.params.genre_id} === 'apple'*/}
            <Route path={`${config.quoteApiURL} + ":name"`} exact component={Results}/>
          </div>
       </Router>
      </div>
    )
  }
}

export default App;
