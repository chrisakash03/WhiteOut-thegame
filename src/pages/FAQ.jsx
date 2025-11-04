import { faqs } from '../data/faqs';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq">
      <div className="faq-container">
        <div className="support-section">
          <div className="support-content-card">
            <div className="support-content">
              <h2 className="support-title">How can we help?</h2>
              <p className="support-description">
                Quick answers, direct contact, and policies for WhiteOut — a challenging word puzzle game.
              </p>
              <div className="support-buttons">
                <a 
                  href="mailto:chrisakashh@gmail.com" 
                  className="support-button email-support-button"
                >
                  <i className="fas fa-envelope"></i>
                  <span>Email Support</span>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-card">
            <h3 className="contact-card-title">Contact</h3>
            <p className="contact-card-text">
              Email me at <a href="mailto:chrisakashh@gmail.com" className="contact-email">chrisakashh@gmail.com</a>.
            </p>
            <p className="contact-card-response">Response target: within 2-3 business days.</p>
          </div>
        </div>
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="faq-content">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
