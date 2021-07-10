import React, {useEffect, useState}  from "react"

import './Book.scss';

import Utils from "../../Utils";
import axios from 'axios';

import Container from 'react-bootstrap/Container';

function Edit(props) {

  const [isLoading, setIsLoading] = useState(true);
  const [errorOccurredLoading, setErrorOccurredLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [booksData, setBooksData] = useState({});

  function fetchBook(id){
    setIsLoading(true);
    axios.get(Utils.buildGetUrl(`/books/${id}`)).then(response => {
      const data = response.data;
      setIsLoading(false);
      setErrorOccurredLoading(false);
      console.log(data);

    }).catch(error => {
      setIsLoading(false);
      setErrorOccurredLoading(true);
      if (error.response) {
        setErrorMessage(`Error ${error.response.status} | ${error.response.statusText}`);
      } else{
        setErrorMessage(`Unknown Error`);
      }
    });
  }
  
  useEffect(() => {
    const bookId = props.match.params.bookId;

    fetchBook(bookId);
  }, []);

  return (
      <div>
        <Container>
        </Container>
      </div>
  );
}

export default Edit;