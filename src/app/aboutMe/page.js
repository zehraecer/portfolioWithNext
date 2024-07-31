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

                        <a style={{ width: "20px", height: "20px" }} href="https://www.instagram.com/zehraecerr/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a style={{ width: "20px", height: "20px" }} href="https://www.linkedin.com/in/zehra-e-88aa57241/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a style={{ width: "20px", height: "20px" }} href="https://github.com/zehraecer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a style={{ width: "20px", height: "20px" }} href="https://github.com/zehraecer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>


                    </div>
                </div>


                <div className="hero-right">
                    <h1>Merhaba, Ben Zehra Ecer</h1>
                    <h3>FRONTEND DEVELOPER</h3>

                    <div className="hero-rightButtons">
                        <a href="https://github.com/zehraecer?tab=repositories">Projelerim</a>
                        <a href="assets/cv/ZehraEcerCV.pdf" download>CV İNDİR</a>
                    </div>

                    <p>
                        Kendini sürekli geliştiren ve yeni teknolojilere meraklı bir yazılım geliştiriciyim.
                        Frontend odaklı çalışıyorum ve React, Next.js, HTML, CSS gibi teknolojilerde deneyimliyim.
                        Kullanıcı dostu ve estetik web uygulamaları tasarlamaktan keyif alıyorum.
                        Ayrıca tasarımlarımı Figma ile oluşturarak projelerimde modern ve işlevsel arayüzler sunuyorum.
                        Daha fazla bilgi ve projelerimi incelemek için aşağıdaki bağlantılara göz atabilirsiniz.
                    </p>
                </div>



            </div >
        </>
    )
}