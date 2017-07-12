import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
	<nav>
		<h3>
			<Link to="/one">One</Link>
		</h3>
		<h3>
			<Link to="/two">Two</Link>
		</h3>
		<h3>
			<Link to="/three">Three</Link>
		</h3>
		<h3>
			<Link to="/four">Four</Link>
		</h3>
	</nav>
);

export default Navigation;
