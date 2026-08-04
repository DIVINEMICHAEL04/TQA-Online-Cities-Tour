import "./About.css";


function About() {
    return(
        <section className="about" id="About">
            <div className="about-content">
                <h2>Talent Is Not Enough When People Cannot see It.</h2>
                <p className="about-description">Many Capable Young People Miss Opportunities Because They Struggle to Speak,
                  <br className="break"/>  Present, Interview, Pitch, Network Or Position Themselves Clearly.</p>
                <div className="about-text">
                    <div className="tqa-text">
                    <p className="about-list-item">
                        Your next opportunity may not care that you are talented. It will ask whether you can communicate your value, present yourself with confidence, and prove that you are ready.

                        The <b>Talk Queen Academy Online Cities Tour</b> is a digital career-readiness and communication roadshow designed to equip ambitious individuals with the skills, confidence, and strategies needed to stand out in today's competitive world.

                        Whether you are a student, graduate, job seeker, young professional, founder, creator, or emerging leader, this experience will help you strengthen your communication, build your personal brand, prepare for career opportunities, expand your network, and position yourself for lasting success.
                        
                        Because opportunities don't just reward talent, they reward those who are prepared, visible, and ready to make an impact.

                    </p>
                    </div>

                    {/* <div className="tqa-text">
                    <p className="full-description">The tour is designed to be accessible to everyone, regardless of location or background. Participants can join the tour from anywhere in the world, and can choose to attend as many or as few events as they like.</p>
                   </div> */}

                   <div className="tqa-text">
                    <p className="full-description">
                        Does this sound like you? 
                    </p>


                        <ol>
                            <li className="about-list-item">- You avoid speaking because you fear making mistakes or being judged.</li>

                            <li className="about-list-item">- Your CV or LinkedIn profile does not clearly communicate your value.</li> 

                            <li className="about-list-item">- You know your work, idea or story is useful, but you cannot package it convincingly.</li>

                            <li className="about-list-item">- Interviews, pitches, presentations or networking situations make you anxious.</li>

                            <li className="about-list-item">- You want to move from school into work but do not feel workplace-ready.</li>

                            <li className="about-list-item">- You are building a business or personal brand but struggle to earn trust quickly.</li>

                            <li className="about-list-item">- You are ready to grow, but you need structure, accountability and professional guidance.</li>
                        </ol>
                        
                        
                        
                   </div>
                   
                </div>

                <div className="cta-quick-link">
                    <p>YES, THIS SOUNDS LIKE ME!</p>
                    <p>→</p>
                    <button className="cta-btn">
                       <a href="https://forms.gle/u5u227B3J3k5E9Ro9" target="_blank" rel="noopener noreferrer">
                        RESERVE MY FREE CITY PASS
                        </a>
                        </button>
                </div>
            </div>
        </section>
    );
};

export default About;