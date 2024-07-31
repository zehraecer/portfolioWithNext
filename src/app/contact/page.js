import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {

    return (
        <>
            <div className="contact-hero  container">
                <h1>İLETİŞİM</h1>
                <div className="contact-heroOne">
                    <span style={{ width: "40px", height: "40px" }}><FontAwesomeIcon icon={faEnvelope} /></span>
                    <a href="mailto:zehraecer1996@hotmail.com">zehraecer1996@hotmail.com</a>
                </div>
            </div>
        </>
    )
}