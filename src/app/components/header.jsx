"use client"
import Link from "next/link"
import { useReducer, useRef } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // JavaScript için

export const Header = () => {
    const navBarRef = useRef()
    const showBar = () => {
        console.log("kdngfdo");
        navBarRef.current.style.display = "flex"
    }

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

                    <nav className="navbar bg-body-tertiary fixed-top">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Zehra Ecer</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Zehra Ecer</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" href="#">Hakkımda</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="#">Projelerim</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="#">Tecrübelerim</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="#">İletişim</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}