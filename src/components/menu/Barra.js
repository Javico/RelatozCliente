import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
//import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Barra() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="#home"><Image src={require('../../imagenes/ghosty1.png')} className="imagenGhosty" /><label className="tituloPage">Relatoz</label></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                     <Nav.Link href="/"><label className="MenuItem">Inicio</label></Nav.Link>
                     <Nav.Link href="/ListadoCategorias"><label className="MenuItem">Categorías</label></Nav.Link>
                     <Nav.Link href="/GridCategorias"><label className="MenuItem">AdminCategorías</label></Nav.Link>
                     <Nav.Link href="/GridHistorias"><label className="MenuItem">AdminHistorias</label></Nav.Link>
                    {/*<Nav.Link href="#pricing">menu 2</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Nav>
                    {/* <Nav.Link href="#login"><label className="AdminLogin">Admin</label></Nav.Link> */}
                    {/* <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
