import React from 'react';
import { slugify } from '../utils/helpers';
import { Route, Link } from 'react-router-dom';

const Post = (props) => {
  return(
    <Link to={`posts/${props.content.slug}`}>
      <div className="post">
        <h3>{props.content.title}</h3>
        <p>{props.content.text}</p>
      </div>
    </Link>
  )
}


const Feed = (props) => {

 
  if (props.match) {
   
  }

  return(
    <div className="createPost">
          Madeline
      <h2>The post feed</h2>
      <div>
        {props.posts.map((post, i) => <Post key={`${i}-${slugify(post.title)}`} content={post}/>)}
      </div>


    </div>
  )
}


export default Feed;
