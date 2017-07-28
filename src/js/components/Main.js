import React from 'react';
import { Route } from 'react-router-dom';
import Feed from './Feed';
import Makepost from './Makepost';
import About from './About';
import Post from './Post';
import Allposts from './Allposts';

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
				{title: "Title One", text: "Post Text One", slug: "post-1", tag: "mexico", url: "http://media.virbcdn.com/cdn_images/resize_1600x1600/71/2df5e5e91ae7eebf-Image294.jpg"},
				{title: "Title Two", text: "Post Text Two", slug: "post-2", tag: "paris", url: "http://media.virbcdn.com/cdn_images/resize_1600x1600/b0/666329b06b8c9773-ADELINE_MEXICO.jpg"}
			],
			user: [
			{
					name: "Madeline OMoore",
					home: "Los Angeles",
					desc: "Big trips, small budget",
					slug: "user-1"
					},
				{
					name: "Natalie OMoore",
					home: "Los Angeles",
					desc: "Small trips, small budget",
					slug: "user-2"
				},

			],
			tag: undefined,
		}
		this.addNewPost = this.addNewPost.bind(this);
		this.matchTag = this.matchTag.bind(this);
	}

	addNewPost(newPost) {
		this.setState({posts: [...this.state.posts, newPost]})
	}


	matchTag(e) {
		
		var theTag = e.target.innerHTML;
		this.setState({tag:theTag});
	}



	
	render() {

		return (
			<main>
				<Route exact path="/post" children={({match}) => {
						if (match) return <Makepost match={match} title="Create a post!" makePost={this.addNewPost} />
						return null;
					}} />

				<Route exact path="/all" children={({match}) => {
						if (match) return <Allposts match={match} posts={this.state.posts}/>
						return null;
				}} />
				<Route exact path="/all/:activeProject" children={({match}) => {
						if (match) return <Allposts tag={this.state.tag} match={match || false} matchTag={this.matchTag} posts={this.state.posts}/>
						return null;
				}} />
				<Route exact path="/" children={({match}) => {
						if (match) return <Feed  posts={this.state.posts} users={this.state.user} />
						return null;
					}} />

				{/*<Route exact path="/about" children={({match}) => {
							if (match) return <About user={this.state.user}  />
							return null;
						}} /> */}

				<Route path="/madeline"  children={({match}) => {
	            if (match) return <Madeline />
	            return null;
	          }}/>

	        <Route exact path='/posts/:activePostSlug' render={({ match }) => {
   				const activePost = this.state.posts.find(p => p.slug === match.params.activePostSlug);
								console.log(activePost);
				return <Post content={activePost} />

			}} />

			  <Route exact path='/user/:activePostSlug' render={({ match }) => {
   				const activePost = this.state.user.find(u => u.slug === match.params.activePostSlug);
				console.log(activePost);
				return <About content={activePost} />
			}} />



			</main>
		)
	}
};

export default Main;
