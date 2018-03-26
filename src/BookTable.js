import React, { Component } from 'react'
import Form from './Form'
import BookList from './BookList'

class BookTable extends Component {
  constructor () {
    super()
    this.state = {
      books: []
    }
  }
  addNewBook = books => this.setState({books: books})
  render () {
    return (
      <div>
        <Form books={this.state.books} changeBooks={this.addNewBook} />
        <BookList books={this.state.books} />
      </div>
    )
  }
}

export default BookTable
