import "./CTA.css";

function CTA() {
    return(
        <section className="cta">
        <div className="tqa-introduction">
          <div className="city-tour">
          <h3>Welcome to TQA Online Cities Tour</h3>
          <h4>9 Online Cities. Two Powerful Days In Each.
            <br />
             One Chance To Show Up Better.</h4>
          <p>Find Your City's Schedule And Join Before Registration Closes!</p>
        </div>
        <div className="date-alert">
          <p>9 Online Cities, 9 Online Hosts</p>
          <p>│</p>
          <p>15th August - 25th September 2026</p>
        </div>
        <div className="cta-btns">
            <p>Enroll Now</p>
            <div className="tqa-btn">
          <button>
           <a href="https://forms.gle/u5u227B3J3k5E9Ro9" target="_blank" rel="noopener noreferrer"> Reserve My Free City Pass</a>
          </button>

          <button className="cta-btns">
            <a href="" target="_blank" rel="noopener noreferrer">See Programme Offers</a>
          </button>
          </div>
        </div>
        </div>
        </section>
    )
}

export default CTA;