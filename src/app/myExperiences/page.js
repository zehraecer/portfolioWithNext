"use client"
import { useContext } from "react"
import { MyContext, MyProvider } from "../context"

export default function Experiences() {
    const { isClicked } = useContext(MyContext)

    return (
        <>
            <div className="myExperiences">

                {!isClicked ? <h1>TECRÜBELERİM</h1> : <h1>MY EXPERIENCES</h1>}

                <div className="myExperiencesContainer">
                    <img src="html.png" />
                    <img src="css.png" />
                    <img src="javascript.png" />
                    <img src="ts.png" />
                    <img src="react.png" />
                    <img src="next.svg" />
                    <img src="figma2.png" />
                    <img src="git.png" />
                    <img src="github.png" />
                    <img src="bootstrap.svg" />
                </div>
            </div>
        </>
    )
}