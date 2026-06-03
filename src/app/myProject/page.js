"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUpRightFromSquare,
    faCode,
    faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Project from "@/data/projects.json";
import { useContext } from "react";
import { MyContext } from "../context";
import Image from "next/image";
import "./MyProjects.css";

export default function MyProjects() {
    const { isClicked } = useContext(MyContext);

    return (
        <section className="myProject">
            <div className="section-title">
                <span>{!isClicked ? "Projeler" : "Projects"}</span>
            </div>

            <div className="MyProject-container">
                {Project.slice()
                    .reverse()
                    .map((proje) => (
                        <div key={proje.id} className="project-card">
                            <div className="project-image">
                                <Image
                                    width={500}
                                    height={360}
                                    src={proje.image}
                                    alt={proje.name}
                                />
                            </div>

                            <a
                                className="external-link"
                                href={proje.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${proje.name} canlı demo`}
                            >
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </a>

                            <div className="project-content">
                                <div className="project-icon">
                                    <FontAwesomeIcon icon={faCode} />
                                </div>

                                <div>
                                    <h3>{proje.name}</h3>
                                    <p>{proje.description}</p>
                                </div>
                            </div>

                            <div className="project-hover">
                                <FontAwesomeIcon className="hover-icon" icon={faCode} />

                                <h3>{proje.name}</h3>
                                <p>{proje.description}</p>

                                <div className="project-actions">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={proje.link}
                                    >
                                        <FontAwesomeIcon icon={faGlobe} />
                                        {!isClicked ? "Canlı Demo" : "Live Demo"}
                                    </a>

                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={proje.github}
                                    >
                                        <FontAwesomeIcon icon={faGithub} />
                                        Github
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
}