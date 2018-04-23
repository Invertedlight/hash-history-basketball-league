import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch }	from 'react-router-dom'
import Home from './Home'
import Players from './Players'
import Teams from './Teams'
import Navbar from './Navbar'
import TeamPage from './TeamPage'

class App extends Component {
  render() {
    return (
    	
	    	<Router>
		      <div >
			      <Navbar />

			      <Switch>
			        <Route path='/' exact component={Home} />
			        <Route path='/players' component={Players} />
			        <Route path='/teams'	component={Teams} />
			        <Route path='/:teamId' exact component={TeamPage} />
			        <Route render={({ location }) => <div><h1 className='text-center'>Four Oh Four.</h1>
			      												<h2 className='text-center'>'{location.pathname}' - Does not exist!</h2></div> } />
            </Switch>
		      </div>
	      </Router>
    )



  }
}

export default App;
