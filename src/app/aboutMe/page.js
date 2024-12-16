"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';
import { MyContext } from '../context';
export default function AboutMe() {
    const { isClicked } = useContext(MyContext)

    return (
        <>
            <div className="hero container">


                <div className="hero-left">

                    <div className="hero-leftFirst">

                        <img src="profil-foto.jpg" />

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
                            <a target="_blank" href="zehraEcerCv.pdf" >CV</a>
                        </div>

                        <p>
                            Kendini sürekli geliştiren ve yeni teknolojilere meraklı bir yazılım geliştiriciyim.
                            Frontend odaklı çalışıyorum ve  HTML, CSS, Javascript, TypeScript, React, Next.js, Bootstrap, Git-Github, Figma gibi teknolojilerde deneyimliyim.
                            Kullanıcı dostu ve estetik web uygulamaları tasarlamaktan keyif alıyorum.
                        </p>
                    </div>
                    :

                    <div className="hero-right">
                        <h1>Hello, I'm Zehra Ecer</h1>

                        <h3>FRONTEND DEVELOPER</h3>

                        <div className="hero-rightButtons">
                            <a href="https://github.com/zehraecer?tab=repositories">My Projects</a>
                            <a target="_blank" href="zehraEcerCv.pdf" >CV</a>
                        </div>

                        <p>
                            I am a software developer who is constantly improving and curious about new technologies. I focus on frontend development and have experience with technologies such as HTML, CSS, JavaScript, TypeScript, React, Next.js, Bootstrap, Git-GitHub, and Figma. I enjoy designing user-friendly and aesthetic web applications.
                        </p>
                    </div>
                }




            </div >
        </>
    )
}