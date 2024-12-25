"use client"
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from 'react';
import { MyContext } from '../context';
// import Script from 'next/script';

export const Header = () => {
    const { isClicked, setIsClicked } = useContext(MyContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(!show);
    const handleShow = () => setShow(!show);

    const LanguageBtn = () => {
        setIsClicked(!isClicked)
    }
    return (
        <>
            <div className=" header container">
                <div className='d-flex justify-content-center align-items-center gap-3 '>

                    <Link href="/aboutMe">ZEHRA ECER
                        <span> / FRONTEND DEVELOPER</span>

                    </Link>

                    <div className='d-flex align-items-center justify-content-center en-tr' onClick={LanguageBtn}>
                        {!isClicked ? <span>EN</span> : <span>TR</span>}
                    </div>
                </div>
                {!isClicked ?
                    <div className="header-navBar">

                        <Link href="/aboutMe">Hakkımda</Link>
                        <Link href="/myProject">Projelerim</Link>
                        <Link href="/myExperiences">Tecrübelerim</Link>
                        <Link href="/contact">İletişim</Link>
                    </div>
                    :
                    <div className="header-navBar">

                        <Link href="/aboutMe">About Me</Link>
                        <Link href="/myProject">My Projects</Link>
                        <Link href="/myExperiences">My Experiences</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                }


                <div className="header-hamburgerBar">

                    <Navbar bg="body-tertiary" fixed="top" expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="#">Zehra Ecer</Navbar.Brand>
                            <div className='d-flex align-items-center justify-content-center gap-2'>
                                <div className='d-flex align-items-center justify-content-center en-tr' onClick={LanguageBtn}>
                                    {!isClicked ? <span>EN</span> : <span>TR</span>}
                                </div>
                                <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
                            </div>

                            <Navbar.Offcanvas
                                id="offcanvasNavbar"
                                aria-labelledby="offcanvasNavbarLabel"
                                placement="end"
                                show={show}
                                onHide={handleClose}
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id="offcanvasNavbarLabel">Zehra Ecer</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Item>
                                            <Link href="/aboutMe" className="nav-link" aria-current="page" onClick={handleClose}>  {!isClicked ? "Hakkımda" : "About Me"}</Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Link href="/myProject" className="nav-link" onClick={handleClose}>{!isClicked ? "Projelerim" : "My Projects"}</Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Link href="/myExperiences" className="nav-link" onClick={handleClose}>{!isClicked ? "Tecrübelerim" : "My Experiences"}</Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Link href="/contact" className="nav-link" onClick={handleClose}>{!isClicked ? "İletişim" : "Contact"}</Link>
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