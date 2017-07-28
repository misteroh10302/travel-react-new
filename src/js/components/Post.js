import React from 'react';



class Post extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props.match);
		return(
			<div>
				<div>

					<h1>{this.props.content.title}</h1>
					<h2>{this.props.content.text}</h2>
			
				</div>
			</div>
		)
	}

}
export default Post;
