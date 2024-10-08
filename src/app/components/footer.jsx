import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
export const Footer = () => {

    return (
        <>

            <div className="footer">
                <div className="footer-left">
                    <div className="footer-leftFirst">
                        <h3>Bana Yazın</h3>
                        <a href="#">zehraecer1996@hotmail.com</a>
                    </div>
                    <div className="footer-leftFirst">
                        <h3>Beni Takip Edin</h3>
                        <div className="footer-social">
                            <a style={{ width: "20px", height: "20px" }} href="https://www.linkedin.com/in/zehra-e-88aa57241/">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a style={{ width: "20px", height: "20px" }} href="https://github.com/zehraecer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <h4>Zehra Ecer © Copyright 2024  Tüm Hakları Saklıdır.</h4>
                </div>
            </div>

        </>
    )
}