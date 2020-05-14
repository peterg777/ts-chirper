import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import NavBar from './component/Navbar';
import Admin from './pages/Admin';
import Compose from './pages/Compose';





class App extends React.Component<AppProps, AppState> {




	render() {
		return (
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/compose" component={Compose} />
					<Route exact path="/details/:id" component={Details} />
					<Route exact path="/chirp/edit/:id" component={Admin} />
					

				</Switch>
			</BrowserRouter>

		);
	}
}

export interface AppProps { }

export interface AppState { }

export default App;
