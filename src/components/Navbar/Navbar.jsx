import { useState } from "react";
import Logo from "../../assets/Logo.png";
import MenuIcon from "../../assets/bar_icon.png";
import CloseIcon from "../../assets/cancel.png";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <div className="logo-container">
                <img className="tqa-logo" src={Logo} alt="Talk Queen Academy Logo" />
            </div>

            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                <ul>
                    <li>
                        <a href="#About" onClick={() => setMenuOpen(false)}>
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#Testimonial" onClick={() => setMenuOpen(false)}>
                            Testimonial
                        </a>
                    </li>

                    <li>
                        <a href="#Cities" onClick={() => setMenuOpen(false)}>
                            Cities
                        </a>
                    </li>

                    <li>
                        <a href="#FAQs" onClick={() => setMenuOpen(false)}>
                            FAQs
                        </a>
                    </li>

                    <li>
                        <a href="#Footer" onClick={() => setMenuOpen(false)}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <img
                    src={menuOpen ? CloseIcon : MenuIcon}
                    alt={menuOpen ? "Close Menu" : "Open Menu"}
                />
            </div>
        </nav>
    );
}

export default Navbar;