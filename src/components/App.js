import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch }	from 'react-router-dom'
import Home from './Home'
import Players from './Players'
import Teams from './Teams'
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
    	
	    	<Router>
		      <div >
			      <Navbar />

			      <Switch>
			        <Route path='/' exact component={Home} />
			        <Route path='/Players' component={Players} />
			        <Route path='/Teams'	component={Teams} />
			        <Route render={({ location }) => <div><h1 className='text-center'>Four Oh Four.</h1>
			      												<h2 className='text-center'>'{location.pathname}' - Does not exist!</h2></div> } />
            </Switch>
		      </div>
	      </Router>
    )



  }
}

export default App;
