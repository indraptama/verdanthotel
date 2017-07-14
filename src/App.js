import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './Components/Header';
import Room from './Route/Room';
import Explore from './Route/Explore';

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
					<Room path="/" />
					<Explore path="/explore/" user="me" />
					<Explore path="/explore/:user" />
				</Router>
			</div>
		);
	}
}
