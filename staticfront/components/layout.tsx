import Link from "next/link"
import { Container, Nav, Navbar } from "react-bootstrap"

const Layout = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link href="/" passHref><Navbar.Brand>Twilight Assembly</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link passHref href="/systems"><Nav.Link href="/systems">Systems</Nav.Link></Link>
                        <Link passHref href="/planets"><Nav.Link>Planets</Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Layout
