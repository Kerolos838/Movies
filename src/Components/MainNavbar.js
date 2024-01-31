import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";

export default function MainNavbar({ search }) {
  // On Search
  function onSearch(word) {
    search(word);
  }
  return (
    <Navbar expand="lg" variant="dark" className="bg-dark">
      <Container>
        <Navbar.Brand href="/Movies">KK8</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#action2">Movies</Nav.Link>
            <Nav.Link href="#action3">Series</Nav.Link>
          </Nav>
          <Form
            className="position-relative"
            style={{ maxWidth: "400px", width: "350px" }}
          >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => onSearch(e.target.value)}
            />
            <FontAwesomeIcon
              className="position-absolute top-50 end-0 translate-middle-y px-3"
              icon={faMagnifyingGlass}
            />
            {/* <Button variant="outline-info">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
