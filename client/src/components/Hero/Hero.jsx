import "./Hero.css";
import Button from "../common/Button/Button";
import profileImage from "../../assets/images/profile.jpg";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";


function Hero() {
    return (
        <section className="hero">
            <div className="hero-left">
                <p className="hero-intro">Hi, I'm</p>

                <h1 className="hero-name">
                    Anurag Mandal
                </h1>

                <h2 className="hero-role">
                    <span>Python</span> Backend Developer
                </h2>

                <p className="hero-description">
                    I build scalable backend applications using
                    Python, Flask, SQL, and modern web technologies.
                </p>

                <div className="hero-buttons">
                    <Button
                        text="Download Resume"
                        href="/resume/resume.pdf"
                        download
                    />

                    <Button
                        text="Contact Me"
                        variant="secondary"
                    />
                </div>

                <div className="hero-socials">
                    <a
                        href="https://github.com/anurag-mandal-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/anurag-mandal-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                    <a href="mailto:anuragmandal8888lnj@gmail.com">
                        <FaEnvelope />
                    </a>
                </div>
            </div>

            <div className="hero-right">
                <div className="profile-image-container">
                    <img
                        src={profileImage}
                        alt="Anurag Mandal"
                        className="profile-image"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;