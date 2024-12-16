"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { MyContext } from '../context';

export default function Contact() {
    const { isClicked } = useContext(MyContext)

    return (
        <>
            <div className="contact-hero  container">
                {!isClicked ? <h1>İLETİŞİM</h1> : <h1>CONTACT</h1>}
                <div className="contact-heroOne">
                    <span style={{ width: "40px", height: "40px" }}><FontAwesomeIcon icon={faEnvelope} /></span>
                    <a href="mailto:zehraecer1996@hotmail.com">zehraecer1996@hotmail.com</a>
                </div>
            </div>
        </>
    )
}