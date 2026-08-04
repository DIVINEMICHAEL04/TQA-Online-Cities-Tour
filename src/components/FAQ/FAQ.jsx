import "./FAQ.css";

import React, { useState } from "react";

import plus from "../../assets/plus.png";
import cancel from "../../assets/cancel.png";
import arrowUpRight from "../../assets/Arrow Up Right.png";

const faqs = [
  {
    title: "Is the Online Cities Tour free?",
    content:
      "Yes. Reserving a city pass and attending the two-day city activation is free. CREP, Speak to Success and the bundle are paid learning programmes offered after the sessions."
  },
  {
    title: "Where will the sessions hold?",
    content:
      "The tour is online. Registered participants will receive the relevant link and reminders through email and/or WhatsApp."
  },
  {
    title: "Can I register for more than one city?",
    content:
      "Yes, where spaces and schedules allow. Choose the city most relevant to you first. You may also follow later cities through the tour page.",
  },
  {
    title: "Must I buy a programme?",
    content:
      "No. You can attend the free city sessions without buying. The paid programmes are for participants who want structured, deeper training and support.",
  },
  {
    title: "Which programme should I choose?",
    content:
      "Choose CREP for career readiness and employability; Speak to Success for communication confidence; choose the bundle when you need both.",
  },
  {
    title: "Will I receive a certificate?",
    content:
      "The free city may include a participation or city recognition note where approved. Formal programme certificates apply to eligible paid participants who complete the programme requirements.",
  },
  {
    title: "Can I pay in instalments?",
    content:
      "Due to the massive price slash offered during the city tours, there are no instalments offer at this time.",
  },
  {
    title: "How does the partner code work?",
    content:
      "Your host’s link or code identifies your city, activates the relevant bonus and allows Talk Queen Academy to track the referral correctly.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="FAQSection" id="FAQs">
      <div className="main-faq-section">
        {/* Header */}
        <div className="FAQ">
          <h3>Frequently Asked Questions</h3>
          <p>
            Still have questions? Contact our team via{" "}
            <span className="support-email">
              <a href="mailto:thetalkqueenacademy@gmail.com">
                thetalkqueenacademy@gmail.com
              </a>
              </span>
          </p>
        </div>

        {/* FAQ List */}
        <div className="general-faqs">
          <div className="sub-general-faqs">
            {faqs.map((faq, index) => (
              <div className="general-faqs-text" key={index}>
                <div className="dropdown" onClick={() => toggleFAQ(index)}>
                  <h5>{faq.title}</h5>
                  <img
                    className={openIndex === index ? "cancel-icon" : "plus-icon"}
                    src={openIndex === index ? cancel : plus}
                    alt={openIndex === index ? "Close" : "Expand"}
                  />
                </div>
                {openIndex === index && (
                  <div className="dropdown-content">
                    <p>{faq.content}</p>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Link */}
            {/* <div className="dropdown see-all-faqs">
              <h5 className="see-all">See all FAQs</h5>
              <img src={arrowUpRight} alt="Arrow pointing up-right" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;