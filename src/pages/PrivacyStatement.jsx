import './PrivacyStatement.css';

const PrivacyStatement = () => {
  return (
    <div className="privacy-statement">
      <div className="privacy-container">
        <h1 className="privacy-title">Privacy Statement</h1>
        <div className="privacy-content">
          <section className="privacy-section">
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, 
              play our games, or contact us for support. This may include your name, email address, 
              username, and gameplay data.
            </p>
          </section>

          <section className="privacy-section">
            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, 
              communicate with you, and ensure the security of our platform. We may also use 
              your information for analytics and to personalize your gaming experience.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this privacy statement. We may share 
              information with service providers who assist us in operating our platform.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information. You may also 
              opt out of certain communications from us. To exercise these rights, please contact us 
              at privacy@whiteout-game.com.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Changes to This Statement</h2>
            <p>
              We may update this privacy statement from time to time. We will notify you of any 
              changes by posting the new statement on this page and updating the &quot;Last Updated&quot; date.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy statement, please contact us at 
              privacy@whiteout-game.com or through our support channels.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyStatement;
