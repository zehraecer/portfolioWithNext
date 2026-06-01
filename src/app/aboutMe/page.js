"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';
import { MyContext } from '../context';
import Image from 'next/image';
export default function AboutMe() {
    const { isClicked } = useContext(MyContext)

    return (
        <>
            <div className="hero container">
                <div className="hero-left">
                    <div className="hero-leftFirst">
                        <Image width={200} height={200} src="/profil-foto.jpg" alt='/profil-foto.jpg' />

                        <h2>ZEHRA <br /> ECER</h2>
                        <h3>FRONTEND DEVELOPER</h3>

                    </div>
                    <div className="hero-leftSecond">
                        <a style={{ width: "20px", height: "20px" }} href="https://www.linkedin.com/in/zehra-e-88aa57241/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a style={{ width: "20px", height: "20px" }} href="https://github.com/zehraecer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
                {!isClicked ?
                    <div className="hero-right">
                        <h1>Merhaba, Ben Zehra Ecer</h1>

                        <h3>FRONTEND DEVELOPER</h3>

                        <div className="hero-rightButtons">
                            <a href="https://github.com/zehraecer?tab=repositories">Projelerim</a>
                            <a target="_blank" href="zehraEcerCv.pdf" >CV (TR)</a>

                        </div>
                        <p>
                            Kendini sürekli geliştiren ve yeni teknolojilere meraklı bir yazılım geliştiriciyim.
                            Frontend geliştirme odaklı çalışıyor; modern, kullanıcı dostu ve performanslı web uygulamaları geliştiriyorum.

                            HTML5, CSS3, SCSS, JavaScript (ES6+), TypeScript, React.js, Next.js, Redux Toolkit ve Bootstrap teknolojileriyle deneyim sahibiyim.

                            Bunun yanında PHP, Laravel, SQL ve WordPress ile backend ve CMS geliştirme süreçlerinde de aktif olarak görev alıyorum.

                            Git & GitHub kullanımı, Ubuntu ortamında çalışma, Apache / LAMP Stack kurulumu ve yönetimi konularında deneyimliyim.
                            Ayrıca FTP üzerinden sunucu yönetimi, dosya aktarımı ve canlıya alma (deployment) süreçlerinde çalışıyorum.

                            Kullanıcı deneyimi yüksek, sürdürülebilir ve ölçeklenebilir projeler geliştirmekten keyif alıyorum.
                        </p>
                    </div>
                    :
                    <div className="hero-right">
                        <h1>{`Hello, I'm Zehra Ecer`}</h1>
                        <h3>FRONTEND DEVELOPER</h3>
                        <div className="hero-rightButtons">
                            <a href="https://github.com/zehraecer?tab=repositories">My Projects</a>
                            <a target="_blank" href="zehra-cv-eng.pdf" >CV(EN)</a>
                        </div>
                        <p>
                            I am a software developer who is constantly improving and curious about new technologies.
                            I mainly focus on frontend development and build modern, user-friendly, and high-performance web applications.

                            I have experience with HTML5, CSS3, SCSS, JavaScript (ES6+), TypeScript, React.js, Next.js, Redux Toolkit, and Bootstrap.

                            In addition, I actively work on backend and CMS development processes using PHP, Laravel, SQL, and WordPress.

                            I also have experience with Git & GitHub workflows, working in Ubuntu environments, and Apache / LAMP Stack setup and management.
                            Furthermore, I manage deployment processes, file transfers, and server operations via FTP.

                            I enjoy developing scalable, maintainable, and user-focused digital products.
                        </p>
                    </div>
                }
            </div >
        </>
    )
}