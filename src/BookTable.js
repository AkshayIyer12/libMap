import React, { Component } from 'react'
import Form from './Form'
import BookList from './BookList'
import uuidv4 from 'uuid/v4'
const createBookObj = ({ title, author }) => id => {
  return {
    id: id,
    author: author,
    title: title
  }
}
class BookTable extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      author: ''
    }
  }
  render () {
    let id = uuidv4()
    return (
      <div>
        <Form title={this.state.title} author={this.state.author} />
        <BookList book={createBookObj(this.state)(id)} />
      </div>
    )
  }
}

export default BookTable
