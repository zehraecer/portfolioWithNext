"use client"
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';

export const Header = () => {
    return (
        <>
            <div className="header container">
                <Link href="/aboutMe">ZEHRA ECER <span>/ FRONTEND DEVELOPER</span></Link>

                <div className="header-navBar">
                    <Link href="/aboutMe">Hakkımda</Link>
                    <Link href="/myProject">Projelerim</Link>
                    <Link href="/myExperiences">Tecrübelerim</Link>
                    <Link href="/contact">İletişim</Link>
                </div>

                <div className="header-hamburgerBar">

                    <Navbar bg="body-tertiary" fixed="top" expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="#">Zehra Ecer</Navbar.Brand>
                            <Navbar.Toggle aria-controls="offcanvasNavbar" />
                            <Navbar.Offcanvas
                                id="offcanvasNavbar"
                                aria-labelledby="offcanvasNavbarLabel"
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id="offcanvasNavbarLabel">Zehra Ecer</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Item>
                                            <Link href="/aboutMe" className="nav-link" aria-current="page">Hakkımda</Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Link href="/myProject" className="nav-link">Projelerim</Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Link href="/myExperiences" className="nav-link">Tecrübelerim</Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Link href="/contact" className="nav-link">İletişim</Link>
                                        </Nav.Item>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </>
    )
}