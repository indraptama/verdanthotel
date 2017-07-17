import { h, Component } from 'preact';
import { Link } from 'preact-router';

import './style.css'

export default class Header extends Component {
	render() {
		return (
			<header class="MainHeader bg-black white ph4">
				<div className="MainHeader_container flex items-center justify-between h3">
					<div className="MainHeader_smallMenu dn-l lh-solid">
						<a href="#" className="dib link white ttu sans f7">menu</a>
					</div>

					<div className="MainHeader_logo">
						<h1 className="f4 m0 lh-solid serif">S+F</h1>
					</div>

					<nav className="MainHeader_nav dn db-l">
	          <Link href="/" className="dib link white mh3 f5">Home</Link>
						<Link href="/rooms" className="dib link white mh3 f5">Room & Suite</Link>
						<Link href="/explore" className="dib link white mh3 f5">Explore</Link>
	          <Link href="/facilities" className="dib link white mh3 f5">Facilities</Link>
						<Link href="/event" className="dib link white mh3 f5">Event&Promo</Link>
	          <Link href="/contact" className="dib link white mh3 f5">Contact</Link>
					</nav>

					<div className="MainHeader_user dn db-l">
						<Link href="/register" className="link dib white">Register</Link>
						<span className="dib mh3">|</span>
						<Link href="/login" className="link dib white">Login</Link>
					</div>

					<div className="MainHeader_smallMenu dn-l lh-solid">
						<a href="#" className="dib link white ttu sans f7">Book Now</a>
					</div>
				</div>
			</header>
		);
	}
}
