import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from '../pages/Login';
import Register from '../pages/Register';
import LoginAndRegisterForm from './LoginAndRegisterForm';

const Navigation = () => {

  // const [showLarForm, setLarShowForm] = useState(false);

  // const larForm = () => {
  //   setLarShowForm(true);
  // }

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
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" role='button' class="bi bi-person-circle ms-3" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
          </svg> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Navigation