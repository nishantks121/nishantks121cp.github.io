import React, { Component } from "react";
import Button from "../components/Button";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Books extends Component {
  state = {
    books: [],
    saved: true
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <h5>Saved Books</h5>
            {!this.state.books.length ? (
              <h1 className="text-center">No Saved Books</h1>
            ) : (
                <List>
                  {this.state.books.map(book => {
                    return (
                      <div className="my-2">
                        <ListItem
                          key={book._id}
                          title={book.title}
                          href={book.link}
                          author={book.author}
                          description={book.description}
                          thumbnail={book.image}
                          saved={this.state.saved}
                        >
                          <Button onClick={() => this.handleDelete(book._id)} type="danger" className="input-lg float-right">DELETE</Button>
                        </ListItem>
                      </div>
                    );
                  })}
                </List>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
