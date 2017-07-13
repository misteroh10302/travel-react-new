import React from 'react';

class Makepost extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      postTitle: "New Post Title",
      postBody: undefined
    }

     this.handleBodyChange = this.handleBodyChange.bind(this)
     this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  handleTitleChange(e){
    console.log(e.target.value);
    this.setState({postTitle: e.target.value });
  }

  handleBodyChange(e){
    this.setState({postBody: e.target.value });
  }

  handleForm() {

  }

  render() {
    return(
      <div>
        <h2>{this.props.title}</h2>
      <input value={this.state.postTitle}  onChange={this.handleTitleChange} type="text"/>
    <textarea name="" id="" cols="30" onChange={this.handleBodyChange}  rows="10">{this.state.postBody}</textarea>
  <button onClick={this.handleForm}>Submit </button>
      </div>
    )
  }
}


export default Makepost;
