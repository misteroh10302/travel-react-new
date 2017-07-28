import React from 'react';
import { slugify } from '../utils/helpers';

class Makepost extends React.Component {

  constructor(props) {
  super(props)

  this.state = {
    title: undefined,
    text: undefined,
    disabled: false,
    slug: undefined,
    tag: undefined
  }

   this.handleBodyChange = this.handleBodyChange.bind(this)
   this.handleTitleChange = this.handleTitleChange.bind(this)
   this.handleForm = this.handleForm.bind(this)
    this.handleTagChange = this.handleTagChange.bind(this)
}

handleTitleChange(e){
  this.setState({title: e.target.value });
}

handleBodyChange(e){
  console.log(e.target.value);
  this.setState({text: e.target.value });
}

handleTagChange(e){
  this.setState({tag: e.target.value });
}

handleForm() {
  var theTitle = this.state.title;
  var theNew = `${slugify(theTitle)}`;
  const newPost = {
    title: this.state.title,
    text: this.state.text,
    slug: theNew,
    tag: this.state.tag
  }
  this.props.makePost(newPost);
  console.log(theNew);
  this.setState({disabled: true});
  this.state.title = "";
  this.state.text = "";
  this.state.tag = "";
}


  render() {
    return(
      <div>
          <h2>{this.props.title}</h2>
          <input value={this.state.title} placeholder="Title" onChange={this.handleTitleChange} type="text"/>
          <textarea name="" id="" cols="30" placeholder="Description of trip" onChange={this.handleBodyChange} value={this.state.text} rows="10">{this.state.text}</textarea>
          <input value={this.state.tag} onChange={this.handleTagChange} type="text" placeholder="tag"/>
          <button onClick={this.handleForm}>Submit </button>
      </div>
    )
  }
}


export default Makepost;
