"use client"
import { useContext } from "react"
import { MyContext, MyProvider } from "../context"
import Image from "next/image"

export default function Experiences() {
    const { isClicked } = useContext(MyContext)

    return (
        <>
            <div className="myExperiences">

                {!isClicked ? <h1>TECRÜBELERİM</h1> : <h1>MY EXPERIENCES</h1>}

                <div className="myExperiencesContainer">
                    <Image width={100} height={100} src="/html.png" />
                    <Image width={100} height={100} src="/css.png" />
                    <Image width={100} height={100} src="/javascript.png" />
                    <Image width={100} height={100} src="/ts.png" />
                    <Image width={100} height={100} src="/react.png" />
                    <Image width={100} height={100} src="/next.svg" />
                    <Image width={100} height={100} src="/figma2.png" />
                    <Image width={100} height={100} src="/git.png" />
                    <Image width={100} height={100} src="/github.png" />
                    <Image width={100} height={100} src="/bootstrap.svg" />
                </div>
            </div>
        </>
    )
}