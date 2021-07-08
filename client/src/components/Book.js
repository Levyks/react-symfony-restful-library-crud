import React, {useEffect, useState}  from "react"

import './Book.scss';

import Utils from "../Utils";
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

function Book(props) {
  const urlQuery = new URLSearchParams(props.location.search);
  const currentPage = urlQuery.get('page') || 1;

  const [books, setBooks] = useState([]);

  function fetchBooks(page = currentPage){
    axios.get(Utils.buildGetUrl("/books", {
      page: 1,
      properties: [
        "title",
        "isbn",
        "authors",
        "categories",
        "thumbnailUrl"
      ],
      itemsPerPage: 10
    })).then(response => {
      setBooks(response.data['hydra:member']);
    });
  }
  
  useEffect(fetchBooks, []);
  

  return (
      <div>
        <Container>
          <h1>Books</h1>
          <Table className="book-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author(s)</th>
                <th>ISBN</th>
              </tr>
            </thead>
            <tbody>
              {books.map(book => (
                <tr>
                  <td>
                    <div className="book-thumb-wrapper">
                      <img src={book.thumbnailUrl} alt="Book thumbnail"></img>
                    </div>
                  </td> 
                  <td>  
                    {book.title}
                  </td>
                  <td className="text-left">
                    <ul>
                      {book.authors.map(author => (
                        <li>{author}</li>
                      ))}
                    </ul>
                  </td>
                  <td>{book.isbn}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
        
      </div>
  );
}

export default Book;