import React, { Component } from 'react'
import uuidv4 from "uuid/v4";

const createBookObj = ({title, author}) => {
  return {
    id: uuidv4(),
    author: author,
    title: title
  }
}
class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      author: ''
    }
  }
  handleTextChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.changeBooks([
      ...this.props.books,
      createBookObj(this.state)
    ]);
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title</label><br />
        <input type='text' placeholder='Add Book' name='title' value={this.state.title}
          onChange={this.handleTextChange} /><br /><br />
        <label>Author</label><br />
        <input type='text' placeholder='Add Author' name='author'
          value={this.state.author} onChange={this.handleTextChange} />
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default Form
