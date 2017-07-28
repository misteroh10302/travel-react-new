import React from 'react';
import { Routen, Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { slugify } from '../utils/helpers';


const Postitem = (props) => {
	const classNames = ['view view--project'];
	var active = false;
  	if (props.match.url === `/all/${props.content.slug}`) active = "active";
  	else active = "inactive";	return(
		<Link to={{
					pathname: `/all/${props.content.slug}`	
				}}>
			<div className={active}>
				{props.content.title}
				<p>{props.content.text}</p>
			</div>
		</Link>
		
	)
}



const Tags = (props) => {
	const classNames = ['view view--project'];
	var active = false;
  	if (props.content.tag === props.tagName) active = "show";
  	else active = "inactive";

	return(
		<Link to={{
					pathname: `/all/${props.content.slug}`	
				}}>
			<li onClick={props.matchTag} className={active}>
				{props.content.tag}
			</li>
		
			<div>
				<img src={props.content.url} alt=""/>
				{props.content.title}
				<p>{props.content.text}</p>
			</div>
		
		</Link>
	)
}


class Allposts extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return(
			<div>
				{/*}
				<div>
					{this.props.posts.map((post, i) => <Postitem match={this.props.match} key={`${i}-${slugify(post.title)}`} content={post}/>)}
				</div>
				*/}
				<ul>
					{this.props.posts.map((post, i) => <Tags key={`${i}-${slugify(post.title)}`} matchTag={this.props.matchTag} tagName={this.props.tag} content={post}/>)}
				</ul>
			</div>
		)
	}

}
export default Allposts;
