"use client";

import { useContext } from "react";
import { MyContext } from "../context";
import "./Experiences.css";

export default function Experiences() {
    const { isClicked } = useContext(MyContext);

    const technologies = [
        ["HTML5", "Yapılandırma", "Markup", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"],
        ["CSS3", "Tasarım", "Styling", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"],
        ["JavaScript", "Programlama", "Programming", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
        ["TypeScript", "Tip Güvenliği", "Type Safety", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"],
        ["React.js", "UI Kütüphanesi", "UI Library", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"],

        ["Next.js", "React Framework", "React Framework", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"],
        ["Redux Toolkit", "Durum Yönetimi", "State Management", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"],
        ["Git", "Versiyon Kontrol", "Version Control", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"],
        ["Figma", "UI/UX Tasarım", "UI/UX Design", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"],
        ["Sass", "CSS Ön İşlemci", "CSS Preprocessor", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"],

        ["GitHub", "Kod Depolama", "Code Hosting", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"],
        ["Bootstrap", "CSS Framework", "CSS Framework", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"],
        ["Laravel", "PHP Framework", "PHP Framework", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"],
        ["MySQL", "Veritabanı", "Database", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"],
        ["PHP", "Sunucu Dili", "Server Language", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"],

        ["WordPress", "CMS", "CMS", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"],
        ["Ubuntu", "Linux Dağıtımı", "Linux Distribution", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg"],
        ["Apache", "Web Sunucusu", "Web Server", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg"],
    ];

    return (
        <section className="experiences-section">
            <div className="experiences-header">
                <span>{isClicked ? "SKILLS" : "YETKİNLİKLERİM"}</span>
                <h1>{isClicked ? "MY EXPERIENCES" : "TECRÜBELERİM"}</h1>
                <p>
                    {isClicked
                        ? "Technologies and tools I use in my projects"
                        : "Projelerimde kullandığım teknolojiler ve araçlar"}
                </p>
            </div>

            <div className="experiences-grid">
                {technologies.map(([name, tr, en, image]) => (
                    <div className="experience-box" key={name}>
                        <img src={image} alt={name} />
                        <h3>{name}</h3>
                        <p>{isClicked ? en : tr}</p>
                    </div>
                ))}
            </div>

            <div className="experience-stats">
                <div className="stat-item">
                    <div className="stat-icon">{"</>"}</div>
                    <div>
                        <h4>15+</h4>
                        <p>{isClicked ? "Projects Completed" : "Proje Tamamlandı"}</p>
                    </div>
                </div>

                <div className="stat-item">
                    <div className="stat-icon">▣</div>
                    <div>
                        <h4>2+</h4>
                        <p>{isClicked ? "Years Experience" : "Yıl Deneyim"}</p>
                    </div>
                </div>

                <div className="stat-item">
                    <div className="stat-icon">↗</div>
                    <div>
                        <h4>10+</h4>
                        <p>{isClicked ? "Technologies" : "Teknoloji"}</p>
                    </div>
                </div>

                <div className="stat-item">
                    <div className="stat-icon">☕</div>
                    <div>
                        <h4>1000+</h4>
                        <p>{isClicked ? "Coffees Consumed ☺" : "Kahve Tüketildi ☺"}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}