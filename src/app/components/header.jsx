"use client"
import Link from "next/link"
import { useReducer, useRef } from "react"

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

                    <img src="hamburger.svg" onClick={showBar} />
                    <div className="hamburgerBar" ref={navBarRef}>
                        <div className="hamburgerBarNav">
                            <Link href="/aboutMe">Hakkımda</Link>
                            <Link href="/myProject">Projelerim</Link>
                            <Link href="/myExperiences">Tecrübelerim</Link>
                            <Link href="/contact">İletişim</Link>
                        </div>
                        {/* <div>
                            <h1>Xxxxxxxxxx</h1>

                        </div> */}
                    </div>

                </div>
            </div>
        </>
    )
}