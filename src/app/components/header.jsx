"use client"

import Link from "next/link"

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

                    <img src="hamburger.svg" />

                </div>
            </div>
        </>
    )
}