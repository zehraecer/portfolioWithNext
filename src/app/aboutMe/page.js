import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
export default function AboutMe() {

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

                <div className="hero-right">
                    <h1>Merhaba, Ben Zehra Ecer</h1>
                    <h3>FRONTEND DEVELOPER</h3>

                    <div className="hero-rightButtons">
                        <a href="https://github.com/zehraecer?tab=repositories">Projelerim</a>
                        <a target="_blank" href="zehraEcerCv.pdf" >CV</a>
                    </div>

                    <p>
                        Kendini sürekli geliştiren ve yeni teknolojilere meraklı bir yazılım geliştiriciyim.
                        Frontend odaklı çalışıyorum ve  HTML, CSS, Javascript, React, Next.js, Bootstrap, Git-Github, Figma gibi teknolojilerde deneyimliyim.
                        Kullanıcı dostu ve estetik web uygulamaları tasarlamaktan keyif alıyorum.
                    </p>
                </div>



            </div >
        </>
    )
}