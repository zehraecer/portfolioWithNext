"use client"

import Link from "next/link"

export const Header = () => {

    return (
        <>
            <div className="header container">
                <a href="index.html">ZEHRA ECER <span>/ FRONTEND DEVELOPER</span></a>

                <div className="header-navBar">
                    <Link href="index.html">Hakkımda</Link>
                    <Link href="projects.html">Projelerim</Link>
                    <Link href="experiences.html">Tecrübelerim</Link>
                    <Link href="contact.html">İletişim</Link>
                </div>

                <div className="header-hamburgerBar">

                    <img src="assets/img/hamburger.svg" />

                </div>
            </div>
        </>
    )
}