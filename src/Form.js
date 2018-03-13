import React, { Component } from 'react'

class Form extends Component {
  render = () => {
    const {title, author} = this.props
    return (
    <form>
      <label>Title</label> 
      <input type="text" placeholder="Add Book" value={title} />
      <label>Author</label>
      <input type="text" placeholder="Add Author" value={author}/>
    </form>
    )
  }
}

export default Form
