import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
	<nav>
		<h3>
			<Link to="/">Home</Link>
		</h3>
		<h3>
			<Link to="/post">Post</Link>
		</h3>
		<h3>
			<Link to="/about">About me</Link>
		</h3>
		<h3>
			<Link to="/all">View all</Link>
		</h3>
	</nav>
);

export default Navigation;
