import"./Testimonial.css"
import Gloria from "../../assets/Gloria.jpeg"
import Akanenying from "../../assets/Akanenying.png"
import Elizabeth from "../../assets/Elizabeth.png"
import Emediong from "../../assets/Emediong.png"
import EmemMojima from "../../assets/Emem Mojima.jpeg"
import Mercy from "../../assets/Mercy Emmanuel.jpeg"
import Thumbnail1 from "../../assets/thumbnail3.jpeg";
import Testimony1 from "../../assets/testimony1.mp4";
import Thumbnail2 from "../../assets/thumbnail1.jpeg";
import Testimony2 from "../../assets/testimonys2.mp4";
import Thumbnail3 from "../../assets/thumbnail2.jpeg";
import Testimony3 from "../../assets/testimonys3.mp4";

{/* <video
  controls
  poster={Thumbnail1}
>
  <source src={Testimony1} type="video/mp4" />
</video> */}

function Testimonial() {
    return (
        <section className="testimonial" id="Testimonial">
            <div className="testimonial-content">
                <h2>What Our Participants Are Saying</h2>
                <div className="review">

                <div className="first-review">
                <div className="students-review">
                   <video
                      controls
                      poster={Thumbnail2}
                    >
                      <source src={Testimony2} type="video/mp4" />
                    </video> 
                    <p>Speak To Success Testimonial</p>
                </div>
                <div className="students-review">
                    <video
                      controls
                      poster={Thumbnail1}
                    >
                      <source src={Testimony1} type="video/mp4" />
                    </video>
                    <p>C.R.E.P Testimonial</p>
                </div>
                <div className="students-review">
                    <video
                      controls
                      poster={Thumbnail3}
                    >
                      <source src={Testimony3} type="video/mp4" />
                    </video>
                    <p>Speak To Success Testimonial</p>
                </div>
                </div>
                
                <div className="first-review">
                <div className="students-review">
                    <img src={Gloria} alt="Student Review" />
                </div>
                <div className="students-review">
                    <img src={Akanenying} alt="Akanenyene" />
                </div>
                <div className="students-review">
                    <img src={Elizabeth} alt="Elizabeth" />
                </div>
                </div>

                   <div className="first-review">
                    <div className="students-review">
                        <img src={Emediong} alt="Emediong" />
                    </div>
                    <div className="students-review">
                        <img src={EmemMojima} alt="Emem Mojima" />
                    </div>
                    <div className="students-review">
                        <img src={Mercy} alt="Mercy Emmanuel" />
                    </div>
                    </div>
                </div>

                </div>
        </section>
    )
}

export default Testimonial;