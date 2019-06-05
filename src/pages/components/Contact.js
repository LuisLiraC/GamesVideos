import React from 'react'
import './Contact.css';
import linkHi from '../../../images/link_hi.png';
import twitterBtn from '../../../images/twitter_button.png';
import githubBtn from '../../../images/github_button.png';
import instagramBtn from '../../../images/instagram_button.png';

function Contact(){
    return (
        <div className="contact">
            <div>
                <img src={linkHi} />
            </div>
            <h2>Puedes encontrar al creador de esta plataforma en sus redes sociales:</h2>
            <div className="social-media">
                <a href="https://www.github.com/LuisLiraC" target="_blank">
                    <img src={githubBtn} />
                </a>
            </div>
            <div className="social-media">
                <a href="https://www.twitter.com/Luis_LiraC" target="_blank">
                    <img src={twitterBtn} /></a>
            </div>
            <div className="social-media">
                <a href="https://www.instagram.com/LuisLiraC" target="_blank">
                    <img src={instagramBtn} />
                </a>
            </div>
        </div>
    )
}

export default Contact;