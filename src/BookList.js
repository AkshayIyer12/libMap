import React, { Component } from 'react'

class BookList extends Component {
  render () {
    let books = [this.props.books]
    console.log(books)
    return (<ul>
      {books.map(book => (
        <div key={book.id}>
          <li>{book.title} | {book.author}</li>
        </div>
      ))}
    </ul>)
  }
}

export default BookList
