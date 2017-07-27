import React from 'react';

class Makepost extends React.Component {

  constructor(props) {
  super(props)

  this.state = {
    title: undefined,
    text: undefined,
    disabled: false
  }

   this.handleBodyChange = this.handleBodyChange.bind(this)
   this.handleTitleChange = this.handleTitleChange.bind(this)
   this.handleForm = this.handleForm.bind(this)
}

handleTitleChange(e){
  this.setState({title: e.target.value });
}

handleBodyChange(e){
  console.log(e.target.value);
  this.setState({text: e.target.value });
}

handleForm() {
  const newPost = {
    title: this.state.title,
    text: this.state.text
  }
  this.props.makePost(newPost);
  console.log('posted!');
  this.setState({disabled: true});

}


  render() {
    return(
      <div>
          <h2>{this.props.title}</h2>
          <input value={this.state.title} placeholder="Title" onChange={this.handleTitleChange} type="text"/>
          <textarea name="" id="" cols="30" placeholder="Description of trip" onChange={this.handleBodyChange}  rows="10">{this.state.text}</textarea>
          <button onClick={this.handleForm}>Submit </button>
      </div>
    )
  }
}


export default Makepost;
