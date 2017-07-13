import React from 'react';
import { Route } from 'react-router-dom';
import Feed from './Feed';
import Makepost from './Makepost';

class Main extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			posts: []
		}
	}

	addNewPost(newPost) {
		this.setState({posts:})
	}
	render() {
		return (
			<main>
				<Route path="/post" children={({match}) => {
						if (match) return <Makepost title="post!" />
						return null;
					}}
				/>
				<Route exact path="/" component={Feed} />
			</main>
		)
	}
};

export default Main;
