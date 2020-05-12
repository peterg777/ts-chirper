import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import DetailsPage from './component/DetailsPage';
import NavBar from './component/Navbar';
import EditButton from './component/Editchirp';





class App extends React.Component<IAppProps, IAppState> {




	render() {
		return (
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/details/:id" component={DetailsPage} />
					<Route exact path="/chirp/edit/:id" component={EditButton} />
					

				</Switch>
			</BrowserRouter>

		);
	}
}

export interface IAppProps { }

export interface IAppState { }

export default App;
