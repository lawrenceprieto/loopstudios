import "../styles/hero.css"
import heroMobile from "../assets/images/mobile/image-hero.jpg"
import heroDesktop from "../assets/images/desktop/image-hero.jpg"

function Hero() {
    return (
        <>
            <div className="hero">
                <img src={heroMobile} className="hero-img mobile" alt="hero-mobile" />                
                <img src={heroDesktop} className="hero-img desktop" alt="hero-desktop" />
                <div className="hero-heading">immersive experiences that deliver</div>
            </div>
        </>
    )
}

export default Hero;