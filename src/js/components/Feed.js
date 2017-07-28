import React from 'react';
import { slugify } from '../utils/helpers';
import { Route, Link } from 'react-router-dom';

const Post = (props) => {
  return(
    <section>
     
        <Link to={`posts/${props.content.slug}`}>
          <div className="post">
            <h3>{props.content.title}</h3>
            <p>{props.content.text}</p>
            <small>{props.content.tag}</small>
          </div>
        </Link>
     
    
         <Link to={`user/${props.content.slug}`}>
          <div className="users">
            <h3>{props.content.name}</h3>
            <p>{props.content.desc}</p>
          </div>
        </Link>
      
    </section>

  )
}


const Feed = (props) => {

 
  if (props.match) {
   
  }

  return(
    <section id="feed">
      <h2>The post feed</h2>
      <div className="feed">
        <div className="activeUsers">
         <h2>Active Users</h2>
          {props.users.map((users, i) => <Post key={`${i}-${slugify(users.name)}`} content={users}/>)}
       </div>
         <div className="myFeed">

          {props.posts.map((post, i) => <Post key={`${i}-${slugify(post.title)}`} content={post}/>)}
        </div>
      </div>
    </section>
  )
}


export default Feed;
