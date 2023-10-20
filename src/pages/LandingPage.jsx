import "../styles/landingpage.css"
import Hero from "../components/Hero";
import interactive from "../assets/images/mobile/image-interactive.jpg"

import deepearth from "../assets/images/mobile/image-deep-earth.jpg"
import nightarcade from "../assets/images/mobile/image-night-arcade.jpg"
import soccerteam from "../assets/images/mobile/image-soccer-team.jpg"
import grid from "../assets/images/mobile/image-grid.jpg"
import fromabove from "../assets/images/mobile/image-from-above.jpg"
import pocketborealis from "../assets/images/mobile/image-pocket-borealis.jpg"
import curiosity from "../assets/images/mobile/image-curiosity.jpg"
import fisheye from "../assets/images/mobile/image-from-above.jpg"

import deepearthDesktop from "../assets/images/desktop/image-deep-earth.jpg"
import nightarcadeDesktop from "../assets/images/desktop/image-night-arcade.jpg"
import soccerteamDesktop from "../assets/images/desktop/image-soccer-team.jpg"
import gridDesktop from "../assets/images/desktop/image-grid.jpg"
import fromaboveDesktop from "../assets/images/desktop/image-from-above.jpg"
import pocketborealisDesktop from "../assets/images/desktop/image-pocket-borealis.jpg"
import curiosityDesktop from "../assets/images/desktop/image-curiosity.jpg"
import fisheyeDesktop from "../assets/images/desktop/image-from-above.jpg"

function LandingPage() {
    const creations = [
        { name: "deep earth", imageMobile: deepearth, imgDesktop: deepearthDesktop },
        { name: "night arcade", imageMobile: nightarcade, imgDesktop: nightarcadeDesktop },
        { name: "soccer team vr", imageMobile: soccerteam, imgDesktop: soccerteamDesktop },
        { name: "the grid", imageMobile: grid, imgDesktop: gridDesktop },
        { name: "from up above vr", imageMobile: fromabove, imgDesktop: fromaboveDesktop },
        { name: "pocket borealis", imageMobile: pocketborealis, imgDesktop:pocketborealisDesktop },
        { name: "the curiosity", imageMobile: curiosity, imgDesktop: curiosityDesktop },
        { name: "make it fisheye", imageMobile: fisheye, imgDesktop: fisheyeDesktop },
    ];

    return (
        <>
            <Hero />

            <div className="container">

                <div className="interactive">
                    <img src={interactive}  className="interactive" alt="interactive" />
                    <div className="details">
                        <div className="heading">the leader in interactive vr</div>
                        <div className="sub-heading">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Ouy award-winning creations have transformed businesses through digital experiences that bind to their brand.</div>
                    </div>
                </div>

                <div className="h-b">
                    <div className="heading">Our Creations</div>
                    <button type="button" className="creations-btn desktop">SEE ALL</button>
                </div>
                <div className="creations">
                    {
                        creations.map((creation, index) => (
                            <div className="creations-container" key={index}>
                                <img className="creation-img mobile" src={creation.imageMobile} alt={creation.name} />
                                <img className="creation-img desktop" src={creation.imgDesktop} alt={creation.name} />
                                <div className="creation-name">{creation.name}</div>
                            </div>
                        ))
                    }
                    <button type="button" className="creations-btn mobile">SEE ALL</button>
                </div>

            </div>
        </>
    )
}

export default LandingPage