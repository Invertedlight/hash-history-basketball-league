import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch }	from 'react-router-dom'
import Loading from './Loading'

import DynamicImport from './DynamicImport'

const Home = (props) => (
	<DynamicImport load={() => import('./Home')}>
		{(Component) => Component === null
			? <Loading />
			: <Component {...props} />}
	</DynamicImport>
)

const Players = (props) => (
	<DynamicImport load={() => import('./Players')}>
		{(Component) => Component === null
			? <Loading />
			: <Component {...props} />}
	</DynamicImport>
)

const Teams = (props) => (
	<DynamicImport load={() => import('./Teams')}>
		{(Component) => Component === null
			? <Loading />
			: <Component {...props} />}
	</DynamicImport>
)

const Navbar = (props) => (
	<DynamicImport load={() => import('./Navbar')}>
		{(Component) => Component === null
			? <Loading />
			: <Component {...props} />}
	</DynamicImport>
)

const TeamPage = (props) => (
	<DynamicImport load={() => import('./TeamPage')}>
		{(Component) => Component === null
			? <Loading />
			: <Component {...props} />}
	</DynamicImport>
)

const Articles = (props) => (
	<DynamicImport load={() => import('./Articles')}>
		{(Component) => Component === null
			? <Loading />
			: <Component {...props} />}
	</DynamicImport>
)

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
			        <Route path='/:teamId/articles' component={Articles} />
			        <Route render={({ location }) => 
			        	<div>
				        	<h1 className='text-center'>Four Oh Four.</h1>
									<h2 className='text-center'>'{location.pathname}' - Does not exist!</h2>
								</div> } 
							/>
            </Switch>
		      </div>
	      </Router>
    )



  }
}

export default App;
