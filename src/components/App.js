import React, { Component } from 'react'
import { BrowserRouter as Router, Route }	from 'react-router-dom'
import Home from './Home'
import Players from './Players'
import Teams from './Teams'

class App extends Component {
  render() {
    return (
    	<Router>
	      <div >
	        
	        <Route path='/' exact component={Home} />
	        <Route path='/Players' component={Players} />
	        <Route path='/Teams'	component-{Teams} />
	      </div>
      </Router>
    )
  }
}

export default App;
