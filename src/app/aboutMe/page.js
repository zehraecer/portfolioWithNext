"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
    faBriefcase,
    faFileLines,
    faCode,
    faServer,
    faCloud,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MyContext } from "../context";
import Image from "next/image";
import "./AboutMe.css";

export default function AboutMe() {
    const { isClicked } = useContext(MyContext);

    const technologies = [
        "HTML5",
        "CSS3",
        "SCSS",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Redux Toolkit",
        "Bootstrap",
        "PHP",
        "Laravel",
        "SQL",
        "WordPress",
    ];

    return (
        <div className="hero container">
            <div className="hero-left">
                <div className="hero-leftFirst">
                    <Image
                        width={200}
                        height={200}
                        src="/profil-foto.jpg"
                        alt="Zehra Ecer profil fotoğrafı"
                    />

                    <h2>
                        ZEHRA <br /> ECER
                    </h2>
                    <h3>SOFTWARE DEVELOPER</h3>
                </div>

                <div className="hero-leftSecond">
                    <a
                        href="https://www.linkedin.com/in/zehra-e-88aa57241/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    <a
                        href="https://github.com/zehraecer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>

            <div className="hero-right">
                <h1>{isClicked ? "Hello, I'm Zehra Ecer" : "Merhaba, Ben Zehra Ecer"}</h1>
                <h3>{isClicked ? "Software Developer" : "Software Developer"}</h3>

                <div className="hero-rightButtons">
                    <a
                        href="https://github.com/zehraecer?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faBriefcase} />
                        {isClicked ? "My Projects" : "Projelerim"}
                    </a>

                    <a target="_blank" href="/zehraecer.pdf" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFileLines} />
                        CV
                    </a>
                </div>

                <div className="about-card">
                    <span>“</span>
                    <p>
                        {isClicked
                            ? "I focus on frontend development and build modern, user-friendly, high-performance web applications."
                            : "Frontend geliştirme odaklı; modern, kullanıcı dostu ve performanslı web uygulamaları geliştiriyorum."}
                    </p>
                </div>

                <div className="tech-section">
                    <h4>
                        <FontAwesomeIcon icon={faCode} />
                        {isClicked ? "Technologies" : "Teknolojiler"}
                    </h4>

                    <div className="tech-list">
                        {technologies.map((tech) => (
                            <span key={tech}>{tech}</span>
                        ))}
                    </div>
                </div>

                <div className="skill-cards">
                    <div className="skill-card">
                        <FontAwesomeIcon icon={faCode} />
                        <h5>{isClicked ? "Frontend Development" : "Frontend Geliştirme"}</h5>
                        <p>
                            {isClicked
                                ? "I create modern and responsive user interfaces."
                                : "Modern ve responsive kullanıcı arayüzleri oluşturuyorum."}
                        </p>
                    </div>

                    <div className="skill-card">
                        <FontAwesomeIcon icon={faServer} />
                        <h5>{isClicked ? "Backend & CMS" : "Backend & CMS"}</h5>
                        <p>
                            {isClicked
                                ? "I support PHP, Laravel, SQL and WordPress processes."
                                : "PHP, Laravel, SQL ve WordPress süreçlerine destek veriyorum."}
                        </p>
                    </div>

                    <div className="skill-card">
                        <FontAwesomeIcon icon={faCloud} />
                        <h5>{isClicked ? "DevOps & Deploy" : "DevOps & Yayınlama"}</h5>
                        <p>
                            {isClicked
                                ? "I have experience with Ubuntu, Apache, FTP and deployment."
                                : "Ubuntu, Apache, FTP ve canlıya alma süreçlerinde deneyimliyim."}
                        </p>
                    </div>
                </div>

                <div className="approach-card">
                    <h4>
                        <FontAwesomeIcon icon={faStar} />
                        {isClicked ? "My Approach" : "Yaklaşımım"}
                    </h4>

                    <p>
                        {isClicked
                            ? "I enjoy developing scalable, maintainable and user-focused digital products."
                            : "Kullanıcı deneyimi yüksek, sürdürülebilir, ölçeklenebilir ve kullanıcı odaklı projeler geliştirmekten keyif alıyorum."}
                    </p>
                </div>
            </div>
        </div>
    );
}