import React from 'react';
import { Route } from 'react-router-dom';
import Feed from './Feed';
import Makepost from './Makepost';

class Main extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			posts: [
				{title: "Title One", text: "Post Text One"},
				{title: "Title Two", text: "Post Text Two"}
			]
		}

		this.addNewPost = this.addNewPost.bind(this);
	}

	addNewPost(newPost) {
		this.setState({posts: [...this.state.posts, newPost]})
	}
	render() {
		return (
			<main>
				<Route path="/post" children={({match}) => {
						if (match) return <Makepost makePost={this.addNewPost} title="post!" />
						return null;
					}}
				/>
				<Route exact path="/" children={({match}) => {
					if (match) return <Feed posts={this.state.posts} />
					return null
				}}
				/>
			</main>
		)
	}
};

export default Main;
