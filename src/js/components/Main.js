import React from 'react';
import { Route } from 'react-router-dom';
import Feed from './Feed';
import Makepost from './Makepost';
import About from './About';
import Post from './Post';
const Madeline = (props) => {
	return(
		<div>
			<h1>OMG IT WORKED</h1>
		</div>
	)
}
class Main extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			posts: [
				{title: "Title One", text: "Post Text One", slug: "post-1"},
				{title: "Title Two", text: "Post Text Two", slug: "post-2"}
			],
			user: {
				name: "Madeline OMoore",
				home: "Los Angeles",
				desc: "Big trips, small budget"
			}
		}
		this.addNewPost = this.addNewPost.bind(this);
	}

	addNewPost(newPost) {
		this.setState({posts: [...this.state.posts, newPost]})
	}

	
	render() {
		return (
			<main>
				<Route exact path="/post" children={({match}) => {
						if (match) return <Makepost title="Create a post!" makePost={this.addNewPost} />
						return null;
					}} />
				<Route exact path="/" children={({match}) => {
						if (match) return <Feed posts={this.state.posts}  />
						return null;
					}} />

				<Route exact path="/about" children={({match}) => {
							if (match) return <About user={this.state.user}  />
							return null;
						}} />

				<Route path="/madeline"  children={({match}) => {
	            if (match) return <Madeline />
	            return null;
	          }}/>

	        <Route path='/posts/:activePostSlug' render={({ match }) => {
   				const activePost = this.state.posts.find(p => p.slug === match.params.activePostSlug);
				console.log(activePost);
				return <Post content={activePost} />

			}} />


			 <Route exact path='/posts/post-2' children={({match}) => {
				 if (match) return <Madeline />
            		return null;
			 }} />

			</main>
		)
	}
};

export default Main;
