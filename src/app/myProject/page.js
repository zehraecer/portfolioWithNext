"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-brands-svg-icons';
import Project from "@/data/projects.json"
import { useContext } from 'react';
import { MyContext } from '../context';
import Image from 'next/image';
export default function MyProjects() {
    const { isClicked } = useContext(MyContext)


    return (
        <>
            <div className="myProject">
                <div>
                    {!isClicked ? <span>Projeler</span> : <span>Projects</span>}
                </div>
                <div className="MyProject-container">
                    {Project.slice().reverse().map(proje => {
                        return (
                            <div key={proje.id} className="Projects" style={{ padding: "24px" }}>
                                <div >
                                    <Image width={300} height={300} src={`${proje.image}`} alt={`/${proje.image}`} />
                                </div>
                                <div className="Projects-hover" style={{ padding: "20px" }}>
                                    <span>{proje.name}</span>
                                    <p>{proje.description}</p>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                                            <Image width={20} height={20} style={{ width: "20px", height: "20px", display: "inline-block", marginInline: "auto" }} src='/globe.png' alt='/globe.png' />
                                            {!isClicked ? <a target="_blank" href={proje.link}>Canlı Demo</a> : <a target="_blank" href={proje.link}>Live Demo</a>}
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                                            <Image width={20} height={20} style={{ width: "20px", height: "20px", display: "inline-block", marginInline: "auto" }} src='/github.png' alt='/github.png' />
                                            <a target="_blank" href={proje.github}>Github</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}