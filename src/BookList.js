import React, { Component } from 'react'

class BookList extends Component {
  render () {
    let books = [this.props.books]
    if (books.length > 0 && !books.includes(undefined)) {
      return (<ul>
        {books.map(book => (
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
