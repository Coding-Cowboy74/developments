import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <div className="border">
            <div className="container">
                <div className="center-content">
                    <ul className="social-media">
                        <li><a href="https://twitter.com/" target="_blank"><FontAwesomeIcon icon="fa-brands fa-twitter" size="3x" className="social-icons" /></a></li>
                        <li><a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon="fa-brands fa-facebook" className="social-icons" size="3x" /></a></li>
                        <li><a href="https://github.com/" target="_blank"><FontAwesomeIcon icon="fa-brands fa-github" size="3x" className="social-icons" /></a></li>
                    </ul>
                </div>
                <div className="copyright-website">Copyright &copy; SJ Martin Designs 2023</div>
            </div>
        </div>
    )
}

export default Footer