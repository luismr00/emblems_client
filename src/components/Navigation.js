import React from 'react';
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
  return (
    // <div>
    //     <Link to="/">Home</Link>
    //     <Link to="/search">Search</Link>
    //     <Link to="/account">Account</Link>
    //     <Link to="/settings">Settings</Link>
    //     <Link to="/login">Login</Link>
    //     <Link to="/register">Register</Link>

    // </div>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">EMBLEMS.GG</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/players">Players</Nav.Link>
            {/* <Link to="/">Home</Link> */}
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <NavDropdown title="Games" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/games/melee">Super Smash Bros. Melee</NavDropdown.Item>
              <NavDropdown.Item href="/games/ultimate">
                Super Smash Bros. Ultimate
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Fantasy" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/fantasy/event-drafts">Fantasy Event Drafts</NavDropdown.Item>
              <NavDropdown.Item href="/fantasy/season-roster">
                Fantasy Season Rosters
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Emblems" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/emblems/credit-money-exchange">Credit Money Exchange</NavDropdown.Item>
              <NavDropdown.Item href="/emblems/wallet">
                Emblems Wallet
              </NavDropdown.Item>
              <NavDropdown.Item href="/emblems/trends-and-insights">
                Emblem Trends & Insights
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Navigation