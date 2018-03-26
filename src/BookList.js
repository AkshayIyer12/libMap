import React, { Component } from 'react'

class BookList extends Component {
  render () {
    let books = [...this.props.books]
    let filteredBooks = books.filter(a => (a !== null || a !== undefined) ? a : null)
    if (filteredBooks.length > 0) {
      return (<ul>
        {filteredBooks.map(book => (
          <div key={book.id}>
            <li>{book.title} | {book.author}</li>
          </div>
        ))}
      </ul>)
    } else {
      return (<p>No Entry to show</p>)
    }
  }
}

export default BookList
