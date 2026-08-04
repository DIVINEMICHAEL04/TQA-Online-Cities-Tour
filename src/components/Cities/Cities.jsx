import "./Cities.css";

import Blessing from "../../assets/Blessing Jaja.jpeg";
import Chinenye from "../../assets/Chinenye Mba.jpeg";
import Nana from "../../assets/dr-nana.webp";
import Eme from "../../assets/Eme Bassey.jpeg";
import Emeka from "../../assets/Emeka Nobis.jpeg";
import Emem from "../../assets/Emem Isong.jpeg";
import Esther from "../../assets/Esther Ijewere.jpeg";
import Faith from "../../assets/Faith Emmanuel.jpeg";
import Captain from "../../assets/Godwin Captain Kalu.jpeg";
import Ini from "../../assets/Ini Jimmy.jpeg";
import Jemima from "../../assets/Jemima Imikan.jpeg";
import Kathryn from "../../assets/Kathryn Esther Clement.jpeg";
import Mmanti from "../../assets/Mmanti Umoh.jpeg";
import Paul from "../../assets/Paul Udah.jpeg";
import Alexander from "../../assets/Lt. Alexander.jpeg";

function Cities() {
const hosts = [
   
    {
        image: Chinenye,
        name: "Chinenye Mba",
        title: "Content Strategist",
        city: "Lagos, Nigeria",
        intro: "Passionate about empowering women through innovation."
    },
    {
        image: Alexander,
        name: "Lt. Alexander",
        title: "Military Strategist",
        city: "Lagos, Nigeria",
        intro: "Dedicated to strategic planning and leadership in challenging environments."
    },
    
    {
        image: Eme,
        name: "Eme Bassey",
        title: "Director Of Health",
        city: "Uyo, Nigeria",
        intro: "Committed to inspiring healthier lives and meaningful conversations."
    },
    {
        image: Emeka,
        name: "Emeka Nobis",
        title: "Knowledge Economy",
        city: "Abuja, Nigeria",
        intro: "Helping individuals unlock knowledge potential, communicate expertise and turn skill into income."
    },
    {
        image: Emem,
        name: "Emem Isong",
        title: "Broadcaster & Influencer",
        city: "Lagos, Nigeria",
        intro: "Using her media presence to inspire, educate, and transform lives."
    },
    {
        image: Faith,
        name: "Faith Emmanuel",
        title: "Women Development Coach",
        city: "Calabar, Nigeria",
        intro: "Dedicated to helping women gain clarity, confidence, and direction."
    },
    {
        image: Captain,
        name: "Godwin Captain Kalu",
        title: "Leadership Speaker",
        city: "Abuja, Nigeria",
        intro: "Sharing practical leadership principles that inspire lasting transformation."
    },
    {
        image: Ini,
        name: "Ini Jimmy",
        title: "Founder, The Leadership Clinic",
        city: "Uyo, Nigeria",
        intro: "Passionate about growth, self-development, and empowering future leaders."
    }
  
   
];

    return (
        <section className="cities" id="Cities">
            <div className="schedule-content">
                <h2>City Hosts</h2>
                <p>Find Your City host And Event Schedule Below</p>
            </div>

            <div className="carousel-wrapper">
    <div className="image-carousel">
        {[...hosts, ...hosts, ...hosts].map((host, index) => (
            <div className="host-card" key={index}>
                <div className="host-img">
                    <img src={host.image} alt={host.name} />
                </div>

                <div className="host-info">
                    <h3>{host.name}</h3>
                    <h4>{host.title}</h4>

                    <div className="host-details">
                        <p>{host.intro}</p>
                        {/* <span>📍 {host.city}</span> */}
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>
        </section>
    );
}

export default Cities;