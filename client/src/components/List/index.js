import React from "react";
import Thumbnail from "../Thumbnail";
import API from "../../utils/API";
import { Container, Row, Col } from "../Grid";
import Button from "../Button";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  author,
  description,
  saved,
  children,
  href
}) {

  function handleSave() {
    console.log("clicked Save");
    API.saveBook({
      author: author,
      description: description,
      link: href,
      title: title,
      image: thumbnail
    }).then(res => console.log(res))
      .catch(err => console.log(err));
  }

  // function handleDelete(id){
  //   API.deleteBook(id)
  //   .then(res => this.loadBooks())
  //   .catch(err => console.log(err));
  // }

  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <h5>{author}</h5>
            <p><b>Description:</b> {description}</p>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Here is an amazing book!
            </a>
            {!saved ? (<Button onClick={() => handleSave()} type="warning" className="input-lg float-right">SAVE</Button>) : (
            <div>
              {children}
            </div>)}
          </Col>
        </Row>
      </Container>
    </li>
  );
}
