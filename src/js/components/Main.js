import React from 'react';
import { Route } from 'react-router-dom';

const One = (props) => {
	return (
		<h2>Content for One</h2>
	);
};

const Two = (props) => {
	return (
		<h2>Content for Two</h2>
	);
};

const Three = (props) => {
	return (
		<h2>Content for Three</h2>
	);
};

const Four = (props) => {
	const isActive = (props.match) ? 'is active' : 'is not active';
	return (
		<footer>
			<h4>Route Four {isActive}.</h4>
		</footer>
	);
};


const Main = () => {
	return (
		<main>
			<Route path="/one" component={One} />
			<Route path="/two" component={Two} />
			<Route path="/three" component={Three} />
			<Route
				path="/four"
				children={
					props => (
						<Four {...props} />
					)
				}
			/>
		</main>
	);
};

export default Main;
