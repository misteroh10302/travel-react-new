import React from 'react';
import { slugify } from '../utils/helpers';

const Post = (props) => {
  return(
    <div className="post">
      <h3>{props.content.title}</h3>
      <p>{props.content.text}</p>
    </div>
  )
}
const Feed = (props) => {
  console.log(props.posts);
  return(
    <div>
      <h2>The post feed</h2>
      <div>
        {props.posts.map((post, i) => <Post key={`${i}-${slugify(post.title)}`} content={post}/>)}
      </div>
    </div>
  )
}

export default Feed;
