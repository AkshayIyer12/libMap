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
  addNewBook = book => {
    this.setState({books: [...this.state.books, book]})
    console.log(this.state.books)
  }
  render () {
    return (
      <div>
        <Form
          title={this.state.title}
          author={this.state.author}
          onNewBookEntry={this.addNewBook} />
        <BookList book={this.state.books} />
      </div>
    )
  }
}

export default BookTable
