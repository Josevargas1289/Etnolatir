import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../nav-bar/navbar.css";
import 'boxicons';




const NavBar = () => {
    return (
        <div className='navBar'>
            <Navbar fixed='top' collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to={'/'}>Etno<i className='bx bxs-heart bx-tada'></i>Latir</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                            <NavDropdown title="Experiencias Significativas" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to={'/año2022'}>2022</NavDropdown.Item>
                                <NavDropdown.Divider />

                                <NavDropdown.Item as={Link} to={'/año2023'}>2023</NavDropdown.Item>
                                
                              
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to={'/galeria'}>Galeria</Nav.Link>
                            <Nav.Link as={Link} to={'/eventos'}>Eventos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default NavBar;