import Logo from "../../assets/Logo.png";
import "./Footer.css";

function Footer(){
    return(
        <footer className="footer" id="Footer">
            <div className="tqa-wa-channel">
            <div className="logo-container">
            <img className="tqa-logo" src={Logo} alt="Logo" />
            </div>
            <div className="wa-channel">
                <div className="channel-box">
                <p>Join our WhatsApp channel <br /> for updates! →</p>
                </div>
                  <div className="icons wa-channel-icon">
                        <a href="https://whatsapp.com/channel/0029VbDCPKOKbYMQ9B45Bl3w">
                        <i className="fab fa-whatsapp" id="channel-icon"></i>
                        </a>
                    </div>
            </div>
            </div>

            <div className="tqa-contact-info">

            <div className="contact-info">
                {/* <p>Contact Us</p> */}
                <p> 
                  <a href="mailto:thetalkqueenacademy@gmail.com">
                      Email: thetalkqueenacademy@gmail.com
                  </a>
              </p>
                <p>Phone: +(234) 8035798290</p>
            </div>

            <div className="social-media">
                <div className="copyright">
                    <p>&copy; 2023 Talk Queen Academy, Inc.</p> 
                    <p>All rights reserved.</p>
                </div>
                <div className="social-icon">
                    <div className="icons">
                        <a href="https://www.facebook.com/share/18n7dD2e2D/">
                        <i className="fab fa-facebook"></i>
                        </a>
                    </div>
                    <div className="icons">
                        <a href="">
                        <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                    <div className="icons">
                        <a href="https://www.instagram.com/thetalkqueenacademy?igsh=aTQ3cXMyN2U0dHFr">
                        <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                    {/* <div className="icons">
                        <a href="">
                        <i className="fab fa-linkedin"></i>
                        </a>
                    </div> */}
                    <div className="icons">
                        <a href="https://youtube.com/@talkqueenacademy?si=6If5cn2M3oQwsP-q">
                        <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                    <div className="icons">
                        <a href="https://chat.whatsapp.com/HVEksY3ifUW5mi80kr0ATk?s=cl&p=a&ilr=4&amv=2 ">
                        <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                    <div className="icons">
                        <a href="https://www.tiktok.com/@the.talk.queen.ac?_r=1&_d=e9hk3k6ab0f107&sec_uid=MS4wLjABAAAAyOqpJ3eIVgATpF-lyyHsigHEqzIgy6frRSzkA0Zn8bffXjbvfSIfE_SbnKWXbHld&share_author_id=7597783786281894920&sharer_language=en&source=h5_m&u_code=f1g1kglhi7mfja&timestamp=1780005736&user_id=7597783786281894920&sec_user_id=MS4wLjABAAAAyOqpJ3eIVgATpF-lyyHsigHEqzIgy6frRSzkA0Zn8bffXjbvfSIfE_SbnKWXbHld&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7397846580579223302&share_link_id=001b872b-58ed-4a19-af71-9b57b472bdf0&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb0229&social_share_type=5&enable_checksum=1">
                        <i className="fab fa-tiktok"></i>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;