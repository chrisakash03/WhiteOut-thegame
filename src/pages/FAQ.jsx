import React from 'react';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: "What is WhiteOut?",
      answer: "WhiteOut is an immersive gaming experience that combines adventure, strategy, and multiplayer elements to create an unforgettable gaming journey."
    },
    {
      question: "How do I get started?",
      answer: "Simply create an account, download the game, and follow the tutorial to begin your adventure in the WhiteOut universe."
    },
    {
      question: "Is WhiteOut free to play?",
      answer: "WhiteOut offers both free-to-play content and premium features. You can enjoy the core game experience for free, with optional premium content available."
    },
    {
      question: "What platforms is WhiteOut available on?",
      answer: "WhiteOut is currently available on PC, Mac, and mobile devices. Console versions are coming soon."
    },
    {
      question: "How can I contact support?",
      answer: "You can reach our support team through the in-game help system or by emailing support@whiteout-game.com. We typically respond within 24 hours."
    },
    {
      question: "Can I play with friends?",
      answer: "Yes! WhiteOut features robust multiplayer functionality that allows you to team up with friends, join guilds, and compete in various multiplayer modes."
    }
  ];

  return (
    <div className="faq">
      <div className="faq-container">
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
