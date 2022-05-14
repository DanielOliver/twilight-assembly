import {Container, Nav, Navbar} from "react-bootstrap";
import Link from "next/link";
import React from "react";

const Layout = ({children}: { children: React.ReactNode }) => {
    return <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Twilight Assembly</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto gap-2">
                        <Nav.Link as={Link} href="/">Home</Nav.Link>
                        <Nav.Link as={Link} href="/planets">Planets</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        {children}
    </>
};

export {Layout}
