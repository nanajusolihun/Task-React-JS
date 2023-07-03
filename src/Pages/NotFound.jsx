import React from "react";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100">
      <h1>Ooops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </Container>
  );
};

export default NotFound;
