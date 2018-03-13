import React, { Component } from 'react'

class BookList extends Component {
  render () {
    let books = [...this.props.book]
    console.log(books)
    return (
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    )
  }
}

export default BookList
