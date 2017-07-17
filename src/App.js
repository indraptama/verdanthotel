import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './Components/Header';

import Home from './Route/Home';
import Room from './Route/Room';
import Explore from './Route/Explore';
import Facilities from './Route/Facilities';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
          <Home path="/" />
          <Room path="/rooms" />
					<Explore path="/explore/" />
          <Facilities path="/facilities/" />
				</Router>
			</div>
		);
	}
}
