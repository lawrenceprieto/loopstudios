import "../styles/hero.css"
import hero from "../assets/images/mobile/image-hero.jpg"

function Hero() {
    return (
        <>
            <div className="hero">
                <img src={hero} className="hero-img mobile" alt="hero" />
                <div className="hero-heading">immersive experiences that deliver</div>
            </div>
        </>
    )
}

export default Hero;