import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAuthorsAsync } from "../author/authorSlice";
import { deleteBookAsync, fetchBooksAsync } from "./bookSlice";
// import { selectBooks } from "./bookSlice";

const BookList = () => {
  //   const books = useSelector(selectBooks());
  //   const { books } = useSelector((state) => state.books.books);
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksAsync()).then((res) => {
      setBooks(res.payload);
    });

    dispatch(fetchAuthorsAsync()).then((res) => {
      setAuthors(res.payload);
    });
  }, [dispatch]);

  const deleteHandler = (id) => {
    //   dispatch(deleteBook(id));
    const deleteBookNow = async () => {
      await deleteBookAsync(id);
      setBooks(books.filter((book) => book.id !== id));
    };
    deleteBookNow();
  };

  const findAuthorByName = (id) => {
    if (authors.length > 0) {
      const author = authors.find((author) => author.id === id);
      return `${author.first_name} ${author.last_name}`;
    } else {
      return "Author";
    }
  };

  console.log(findAuthorByName(1));

  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="mt-3 text-center text-primary">
        Welcome to the Librarya App
      </h1>
      <div className="d-flex flex-wrap">
        {books.map((book) => (
          <Card
            key={book.id}
            style={{ width: "30%", height: "100%" }}
            className="container mt-5 w-30"
          >
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                Author: {findAuthorByName(book.author_id)}{" "}
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#" onClick={(e) => deleteHandler(book.id)}>
                Delete book
              </Card.Link>
              <Card.Link onClick={() => navigate("/new")} href="#">
                Create new book
              </Card.Link>
              <Card.Link onClick={() => navigate("/edit")} href="#">
                Edit book
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BookList;
