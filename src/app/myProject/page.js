"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-brands-svg-icons';
import Project from "@/data/projects.json"
export default function MyProjects() {
    console.log(Project);

    return (
        <>
            <div className="myProject">
                <div>
                    <span>Projeler</span>
                </div>
                <div className="MyProject-container">
                    {Project.slice().reverse().map(proje => {
                        return (
                            <div key={proje.id} className="Projects" style={{ padding: "24px" }}>
                                <div >
                                    <img src={proje.image} />
                                </div>
                                <div className="Projects-hover" style={{ padding: "20px" }}>
                                    <span>{proje.name}</span>
                                    <p>{proje.description}</p>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                                            <img style={{ width: "20px", height: "20px", display: "inline-block", marginInline: "auto" }} src='globe.png' />
                                            <a target="_blank" href={proje.link}>Canlı Demo</a>
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                                            <img style={{ width: "20px", height: "20px", display: "inline-block", marginInline: "auto" }} src='github.png' />
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